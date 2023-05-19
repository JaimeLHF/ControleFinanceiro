import React, { useState } from "react";
import "./Form.css"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDh6_fijd6VKOHeo3_lyboPMn6KfLJd-1w",
    authDomain: "db-firebase-5d90c.firebaseapp.com",
    projectId: "db-firebase-5d90c",
    storageBucket: "db-firebase-5d90c.appspot.com",
    messagingSenderId: "210076045087",
    appId: "1:210076045087:web:0dcc5f236fb364d3dc2a2a"
});

const db = getFirestore(firebaseConfig);

const Form = () => {

    const [descricao, setDescricao] = useState("")
    const [amount, setAmount] = useState("")
    const [expense, setExpense] = useState(false)

    const salvarDados = async (event) => {

        event.preventDefault()

        if (!descricao || !amount) {
            alert('Preencha todos os campos!')
        } else {

            await addDoc(collection(db, "Jaime"), {
                Descricao: descricao,
                Valor: amount,
                Tipo: expense ? "Despesa" : "Entrada",
            });

            setDescricao('')
            setAmount('')
        }
    };

    return (
        <>
            <form className="container_form" >
                <input required={descricao} placeholder={"Descrição"} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <input required placeholder={"Valor"} type={"number"} value={amount} onChange={(e) => setAmount(e.target.value)} />
                <div>
                    <label htmlFor="entradas">Entrada</label>
                    <input type={"radio"} value={"Tipo"} defaultChecked name="group1" id="entradas" onChange={() => setExpense(!expense)} />
                </div>
                <div>
                    <label htmlFor="saidas">Saída</label>
                    <input type={"radio"} value={"Tipo"} name="group1" id="saidas" onChange={() => setExpense(!expense)} />
                </div>
                <button onClick={salvarDados}>Confirmar</button>
            </form>
        </>
    )
}

export default Form;