import Editor from '@monaco-editor/react'
import Modal from '@mui/material/Modal'
import { useRef } from 'react'
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
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    function replicarTexto() {
      inputRef2.current.value = inputRef1.current.value
      // current é um atributo do ref que retorna o elemento
      // value é um atributo do elemento input
    }

    function bloquearOuDesbloquear() {
      inputRef1.current.disabled = !inputRef1.current.disabled
    }

    return (
      <div style={{ display: "flex", gap: 50 }}>
        <div>
          <label htmlFor="input1">Digite algo</label><br />
          <input type="text" id="input1" ref={inputRef1} onChange={replicarTexto} />
        </div>

        <div>
          <label htmlFor="input2">Replicando texto</label><br />
          <input type="text" id="input2" readOnly ref={inputRef2} />
        </div>

        <button onClick={bloquearOuDesbloquear}>bloquear/desbloquear input</button>
        <button onClick={() => {
          console.log(inputRef1.current)
        }}>exibir elemento no log</button>
      </div>
    )
  }`

export default function Ref({ open, setOpen }) {
  function Exemplo() {
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    function replicarTexto() {
      inputRef2.current.value = inputRef1.current.value
      // current é um atributo do ref que retorna o elemento
      // value é um atributo do elemento input
    }

    function bloquearOuDesbloquear() {
      inputRef1.current.disabled = !inputRef1.current.disabled
    }

    return (
      <div style={{ display: "flex", gap: 50 }}>
        <div>
          <label htmlFor="input1">Digite algo</label><br />
          <input type="text" id="input1" ref={inputRef1} onChange={replicarTexto} />
        </div>

        <div>
          <label htmlFor="input2">Replicando texto</label><br />
          <input type="text" id="input2" readOnly ref={inputRef2} />
        </div>

        <button onClick={bloquearOuDesbloquear}>bloquear/desbloquear input</button>
        <button onClick={() => {
          console.log(inputRef1.current)
        }}>exibir elemento no log</button>
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
          width="850px"
          height="500px"
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