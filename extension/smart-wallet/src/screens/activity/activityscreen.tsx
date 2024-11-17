import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Loader2,
  AlertCircle
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { StatusIconProps, SubTransaction, SubTransactionsListProps, SubTransactionStatus, SubTransactionStatusMap, Transaction, TransactionCardProps } from '@/types/transactions';


const ActivityScreen: React.FC = () => {
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [subTransactionStatus, setSubTransactionStatus] = useState<SubTransactionStatusMap>({});
  const [isLoadingStatus, setIsLoadingStatus] = useState<boolean>(false);

  // Load transactions from localStorage on mount
  useEffect(() => {
    try {
      const storedTransactions = localStorage.getItem('transactions');
      if (storedTransactions) {
        const parsedTransactions: Transaction[] = JSON.parse(storedTransactions);
        const sortedTransactions = parsedTransactions.sort((a, b) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setTransactions(sortedTransactions);
      }
    } catch (err) {
      setError('Failed to load transaction history');
      console.error('Error loading transactions:', err);
    }
  }, []);

  // Mock function to fetch transaction status - replace with actual API call
  const fetchTransactionStatus = async (transactionId: string): Promise<void> => {
    setIsLoadingStatus(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response based on transaction type
      const transaction = transactions.find(tx => tx.id === transactionId);
      if (!transaction) throw new Error('Transaction not found');

      let mockStatus: SubTransaction[];
      
      switch(transaction.type) {
        case 'Swap':
          mockStatus = [
            { 
              id: `${transactionId}-1`,
              name: 'Approve Token A',
              status: 'completed',
              executionType: 'parallel',
              timestamp: transaction.timestamp
            },
            { 
              id: `${transactionId}-2`,
              name: 'Approve Token B',
              status: 'completed',
              executionType: 'parallel',
              timestamp: transaction.timestamp
            },
            { 
              id: `${transactionId}-3`,
              name: 'Execute Swap',
              status: transaction.status.toLowerCase() as SubTransactionStatus,
              executionType: 'serial',
              timestamp: transaction.timestamp
            }
          ];
          break;
        case 'Bridge':
          mockStatus = [
            { 
              id: `${transactionId}-1`,
              name: 'Lock Tokens',
              status: 'completed',
              executionType: 'serial',
              timestamp: transaction.timestamp
            },
            { 
              id: `${transactionId}-2`,
              name: 'Confirm on Source Chain',
              status: transaction.status.toLowerCase() as SubTransactionStatus,
              executionType: 'serial',
              timestamp: transaction.timestamp
            },
            { 
              id: `${transactionId}-3`,
              name: 'Mint on Target Chain',
              status: 'pending',
              executionType: 'serial',
              timestamp: null
            }
          ];
          break;
        default:
          mockStatus = [
            { 
              id: `${transactionId}-1`,
              name: 'Approve Token',
              status: 'completed',
              executionType: 'serial',
              timestamp: transaction.timestamp
            },
            { 
              id: `${transactionId}-2`,
              name: 'Execute Transfer',
              status: transaction.status.toLowerCase() as SubTransactionStatus,
              executionType: 'serial',
              timestamp: transaction.timestamp
            }
          ];
      }
      
      setSubTransactionStatus(prev => ({
        ...prev,
        [transactionId]: mockStatus
      }));
    } catch (err) {
      setError('Failed to fetch transaction status');
    } finally {
      setIsLoadingStatus(false);
    }
  };

  const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'in progress':
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const SubTransactionsList: React.FC<SubTransactionsListProps> = ({ transactionId }) => {
    const status = subTransactionStatus[transactionId];

    if (isLoadingStatus) {
      return (
        <div className="flex justify-center items-center py-4">
          <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-500">Loading transaction details...</span>
        </div>
      );
    }

    if (!status) return null;

    return (
      <div className="pl-4 mt-2 space-y-2">
        {status.map((subTx, index) => (
          <div 
            key={subTx.id}
            className="flex items-center space-x-3 p-2 rounded-md bg-gray-50"
          >
            <StatusIcon status={subTx.status} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{subTx.name}</span>
                <span className="text-xs text-gray-500">
                  {subTx.executionType === 'parallel' ? '(Parallel)' : '(Serial)'}
                </span>
              </div>
              {subTx.timestamp && (
                <div className="text-xs text-gray-500">
                  {new Date(subTx.timestamp).toLocaleTimeString()}
                </div>
              )}
            </div>
            {index < status.length - 1 && subTx.executionType === 'serial' && (
              <div className="h-full flex items-center">
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
    const isExpanded = expandedTransaction === transaction.id;

    const handleExpand = async () => {
      if (!isExpanded) {
        setExpandedTransaction(transaction.id);
        await fetchTransactionStatus(transaction.id);
      } else {
        setExpandedTransaction(null);
        // Clear the status when collapsing
        setSubTransactionStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[transaction.id];
          return newStatus;
        });
      }
    };

    return (
      <Card className="mb-4">
        <CardContent className="p-4">
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleExpand}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <StatusIcon status={transaction.status} />
                <div>
                  <div className="font-medium">{transaction.type}</div>
                  <div className="text-sm text-gray-500">
                    {transaction.amount} • {new Date(transaction.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>

          {isExpanded && (
            <>
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Amount</div>
                    <div className="font-medium">{transaction.amount}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">To</div>
                    <div className="font-medium">{transaction.to}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Steps</div>
                <SubTransactionsList transactionId={transaction.id} />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {transactions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No transactions yet
            </div>
          ) : (
            <ScrollArea className="h-[500px] pr-4">
              {transactions.map(transaction => (
                <TransactionCard 
                  key={transaction.id} 
                  transaction={transaction}
                />
              ))}
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityScreen;