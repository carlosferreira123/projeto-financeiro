import { HeaderContainer, HeaderContent, NewTrasctionButton } from "./style";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
              <img src={logoImg} alt="logo" />

               <Dialog.Root>
                 <Dialog.Trigger asChild>
                    <NewTrasctionButton>Nova Transação</NewTrasctionButton>          
                 </Dialog.Trigger>
                
                  <NewTransactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}