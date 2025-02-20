import {  createContext, ReactNode, useEffect, useState } from "react";


interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;

}
interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextType {
    transactions: Transaction[];
}


export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider( {children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])
        
    useEffect(() => {
        async function loadTransactions() {
          try {
            const response = await fetch("http://localhost:3000/transactions");
            if (!response.ok) {
              throw new Error("Erro ao buscar transações");
            }
            const data = await response.json();
            setTransactions(data);
          } catch (error) {
            console.error("Erro ao carregar transações:", error);
          }
        }
    
        loadTransactions();
      }, []);
    
    
    
    return(
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}