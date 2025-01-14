import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./style";

export function SearchForm() {
    return(
        <SeachFormContainer>
            <input type="text" placeholder="Busque uma transação"/>

            <button type="submit">
                <MagnifyingGlass size={10}/>
                Buscar
            </button>
        </SeachFormContainer>
    )
}