import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransacationType, TransactionTypeButton } from './style';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income',  'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
     const  createTransaction  = useContextSelector(TransactionsContext, (context) => {
      return context.createTransaction

      
     })
  
     const { 
      control,
      register, 
      handleSubmit, 
      formState: {
        isSubmitted
      },
      reset,
     } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormSchema),
     })

     async function handleCreateNewTransaction(data:NewTransactionFormInputs) {
      const { description, category,price, type  } = data;
      
     await createTransaction({
      description,
      category,
      price,
      type,
     })
      
      reset();
     }
  
    return (
        <Dialog.Portal>
        
        <Overlay/>
         
         <Content>
           <Dialog.Title>Nova transação</Dialog.Title>
            
            <CloseButton>
                <X size={24}/>
            </CloseButton>

              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input 
                type="text" 
                placeholder='Descrição' 
                required
                {...register('description')}
                />
                <input 
                type="text" 
                placeholder='Preço' 
                required
                {...register('price', {valueAsNumber: true})}
                />
                <input 
                type="text" 
                placeholder='Categoria' 
                required
                {...register('category')}
                />
                 
                <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  console.log(field)
                  
                  return(
                    <TransacationType 
                    onValueChange={field.onChange} 
                    value={field.value}>
                   <TransactionTypeButton variant='income' value='income'>
                     <ArrowCircleUp size={24}/>
                     Entrada
                   </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24}/>
                    Saida
                  </TransactionTypeButton>

                </TransacationType>
                  )
                }}
                 />

                <button type="submit" disabled={isSubmitted}> 
                  Cadastrar 
                </button>

              </form>  
         </Content>

      </Dialog.Portal>
   
    )
}