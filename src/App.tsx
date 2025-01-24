import { ThemeProvider } from "styled-components"
import {  GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Transactions } from "./pages/Transections"
import { TransactionsProvider } from "./contexts/Transactions"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
     
     <TransactionsProvider>
      <Transactions/>
     </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
