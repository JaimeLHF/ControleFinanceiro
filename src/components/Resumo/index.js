import React from "react";
import Card from "../Card"
import './Resumo.css'

const Resumo = ({ entradas, saidas, total}) => {
    return (
        <div>
            <section>
                <Card title="Entradas" value={entradas} />
                <Card title="Saídas" value={saidas} />
                <Card title="Total" value={total} />
            </section>
        </div>
    )
}

export default Resumo;