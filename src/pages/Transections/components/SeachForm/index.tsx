import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";


const searchFormSchema = z.object({
    query: z.string(),
})

type SearchtFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const  fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
      return context.fetchTransactions
    })
    
    const {
        register, 
        handleSubmit,
         formState: {
             isSubmitting 
         }
    } = useForm<SearchtFormInputs> ({
        resolver: zodResolver(searchFormSchema),
    })
    
    
    async function handleSearchTransacations(data: SearchtFormInputs) {
        console.log("Consulta:", data.query)
        await fetchTransactions(data.query)
        
       
    }

    return(
        <SeachFormContainer onSubmit={handleSubmit(handleSearchTransacations)}>
            <input 
            type="text" 
            placeholder="Busque uma transação"
            {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={10}/>
                Buscar
            </button>
        </SeachFormContainer>
    )
}