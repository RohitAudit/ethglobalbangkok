// Types and Interfaces
export type TransactionType = 'Swap' | 'Bridge' | 'Send' | 'Receive';
export type TransactionStatus = 'Completed' | 'Failed' | 'In Progress' | 'Pending';
export type ExecutionType = 'serial' | 'parallel';
export type SubTransactionStatus = 'completed' | 'failed' | 'in_progress' | 'pending';

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;
  timestamp: string;
  amount: string;
  to: string;
}

export interface SubTransaction {
  id: string;
  name: string;
  status: SubTransactionStatus;
  executionType: ExecutionType;
  timestamp: string | null;
  error?: string;
}

export interface SubTransactionStatusMap {
  [key: string]: SubTransaction[];
}

export interface StatusIconProps {
  status: TransactionStatus | SubTransactionStatus;
}

export interface SubTransactionsListProps {
  transactionId: string;
}

export interface TransactionCardProps {
  transaction: Transaction;
}
