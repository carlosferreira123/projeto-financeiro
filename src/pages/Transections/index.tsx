import { useContext } from "react";
import { Header } from "../../components/Header";
import { Sumary } from "../../components/Summary";
import { SearchForm } from "./components/SeachForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/Transactions";




export function Transactions() {
    const  { transactions } = useContext(TransactionsContext);
    
    return (
        <div>
            <Header/>
            <Sumary/>
                     
            <TransactionsContainer>
             <SearchForm/>
              
              <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                        <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                       <td>
                         <PriceHighlight variant={transaction.type}>
                           {transaction.price}
                         </PriceHighlight>
                       </td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                        )
                    })}
                    
                    
                   
                  
                </tbody>
              </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}