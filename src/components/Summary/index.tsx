import { ArrowCircleUp } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";


export function Sumary() {
    return (
        <SummaryContainer>
          <SummaryCard>
             <header>
               <span>Entradas</span>    

               <ArrowCircleUp size={32} color="#00b37e"/>
             </header>

             <strong>R$ 17.900.00</strong>

          </SummaryCard>

          <SummaryCard>
             <header>
               <span>Saídas</span>    

               <ArrowCircleUp size={32} color="#f75a68"/>
             </header>

             <strong>R$ 17.900.00</strong>

          </SummaryCard>

          <SummaryCard variant="green">
             <header>
               <span>Total</span>    

               <ArrowCircleUp size={32} color="#fff"/>
             </header>

             <strong>R$ 17.900.00</strong>

          </SummaryCard>
        </SummaryContainer>
    );
}