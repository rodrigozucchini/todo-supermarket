import react, {useState} from "react";
import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Busca tus productos" 
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}
export {TodoSearch};