import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter"> {total === 0 ? "No hay productos cargados hasta el momento": `🛒 Has encontrado ${completed} de ${total} ${total === 1 ? "producto" : "productos"} en el Supermercado 🛒`}</h2>
    )
}

export {TodoCounter};