import React, { useEffect, useState } from 'react';
import "./Lista.css"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDh6_fijd6VKOHeo3_lyboPMn6KfLJd-1w",
    authDomain: "db-firebase-5d90c.firebaseapp.com",
    projectId: "db-firebase-5d90c",
    storageBucket: "db-firebase-5d90c.appspot.com",
    messagingSenderId: "210076045087",
    appId: "1:210076045087:web:0dcc5f236fb364d3dc2a2a"
});


const db = getFirestore(firebaseConfig);
const userCollectionRef = collection(db, "Jaime");

const Lista = () => {

    const [user, setUser] = useState([])

    async function onDelete(ID) {
        await deleteDoc(doc(db, "Jaime", ID))
            .then(alert(ID + "Deletado com Sucesso!"));

    };


    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getDocs(userCollectionRef);
                setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (erro) {
                console.log(erro)
            }
        };

        getUsers();
    }, []);

    return (

        <div>

            <table className="tb">
                <thead >
                    <tr>
                        <th>Descrição</th>
                        <th>Valor R$</th>
                        <th>Tipo</th>
                        <th>---</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.Descricao}</td>
                                <td>{user.Valor}</td>
                                <td>{user.Tipo}</td>
                                <td><button onClick={() => onDelete(user.id)}>Del</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}

export default Lista;