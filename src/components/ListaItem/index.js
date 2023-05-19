import React from "react";
import "./ListaItem.css"

const ListaItem = ({ item, onDelete }) => {

    return (
        <tr>
            <td>{item.desc}</td>
            <td>{item.total}</td>
            <td>{item.despesa ? "Saída" : "Entrada"}</td>
            <td onClick={() => onDelete(item.id)}>Deletar</td>
        </tr>
    )
}

export default ListaItem;