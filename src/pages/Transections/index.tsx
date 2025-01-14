import { Header } from "../../components/Header";
import { Sumary } from "../../components/Summary";
import { SearchForm } from "./components/SeachForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
    return (
        <div>
            <Header/>
            <Sumary/>
                     
            <TransactionsContainer>
             <SearchForm/>
             <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                       <td>
                       <PriceHighlight variant="income">
                        R$ 12.000,00
                       </PriceHighlight>
                       </td>
                        <td>Venda</td>
                        <td>13/04/2024</td>
                    </tr>
                    
                    <tr>
                        <td width="50%">Hamburguer</td>
                        <td>
                        <PriceHighlight variant="outcome">
                            R$ 50.00
                        </PriceHighlight>
                        </td>
                        <td>limentação</td>
                        <td>13/04/2024</td>
                    </tr>
                  
                </tbody>
             </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}