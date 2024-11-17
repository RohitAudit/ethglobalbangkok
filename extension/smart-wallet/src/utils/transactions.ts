// Helper function to add new transaction

import { Transaction } from "@/types/transactions";

export const addNewTransaction = (transaction: Transaction): void => {
  try {
    const storedTransactions = localStorage.getItem('transactions');
    const transactions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];
    const updatedTransactions = [transaction, ...transactions];
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  } catch (err) {
    console.error('Error saving transaction:', err);
    throw new Error('Failed to save transaction');
  }
};