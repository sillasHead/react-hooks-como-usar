import Editor from '@monaco-editor/react'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: #282c34;
  color: whitesmoke;
  border-radius: 5px;

  button {
    background-color: #1447ad;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  }
`

const editor =
`function Exemplo() {
  const [contador, setContador] = useState(0 /* valor inicial */)
  // contador é o objeto que representa o estado
  // setContador é a função que altera o estado
  
  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }
  
  return (
    <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
      <button onClick={decrementar}>decrementar</button>
      <span>Contador: <b>{contador}</b></span>
      <button onClick={incrementar}>incremenar</button>
    </div>
  )
}`

export default function State({ open, setOpen }) {
  function Exemplo() {
    const [contador, setContador] = useState(0 /* valor inicial */)
    // useState retorna um array com dois elementos:
    // 1º é o objeto que representa o estado
    // 2º é a função que altera o estado, por convenção iniciado com 'set'

    function incrementar() {
      setContador(contador + 1)
    }

    function decrementar() {
      setContador(contador - 1)
    }
    
    return (
      <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
        <button onClick={decrementar}>decrementar</button>
        <span>Contador: <b>{contador}</b></span>
        <button onClick={incrementar}>incremenar</button>
      </div>
    )
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
    >
      <Container>
        {/* <h3>
          TODO explicação
        </h3>

        <hr /> */}

        <h1>Exemplo</h1>
        <Exemplo />
        
        <h1>Código</h1>
        <Editor
          height="400px"
          width="720px"
          path="src/hooks/Ref/index.jsx"
          theme="vs-dark"
          value={editor}
          options={{
            readOnly: true,
          }}
        />
      </Container>
    </Modal>
  )
}