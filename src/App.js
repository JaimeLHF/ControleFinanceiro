import React, { useState } from "react";
import "./Styles/global.css";
import Form from "./components/Form";
import Lista from './components/Lista';
import Header from "./components/Header";
import Resumo from "./components/Resumo";

const App = () => {

  const [entradas, setEntradas] = useState(0)
  const [saidas, setSaidas] = useState(0)
  const [total, setTotal] = useState(0)


  return (
    <>
      <Header />
      <Resumo entradas={entradas} saidas={saidas} total={total} />
      <Form />
      <Lista />
    </>
  )
}

export default App;