import { HeaderContainer, HeaderContent, NewTrasctionButton } from "./style";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg'

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
              <img src={logoImg} alt="logo" />

               <Dialog.Root>
                 <Dialog.Trigger asChild>
                    <NewTrasctionButton>Nova Transação</NewTrasctionButton>          
                 </Dialog.Trigger>
                
                  <Dialog.Portal>
                    <Dialog.Portal/>

                    <Dialog.Content>
                      <Dialog.Title>Nova transação</Dialog.Title>
                      
                      <Dialog.Close/>
                    </Dialog.Content>
                  </Dialog.Portal>
               </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}