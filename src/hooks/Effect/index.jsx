import Editor from '@monaco-editor/react'
import Modal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
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
    const [cor, setCor] = useState('#FFFFFF')

    // useEffect recebe dois parâmetros:
    // 1. Uma função que será executada quando o componente for renderizado
    // 2. Uma lista de dependências, que ao terem seu estado
    // alterado, executará a função novamente
    // retorna uma função que será executada quando o componente for desmontado
    useEffect(() => {
      alert('nova cor gerada -> ' + cor)
    }, [cor])

    // pode ser usado quantas vezes for necessário
    // até mesmo dentro de outros hooks
    useEffect(() => {
      alert('componente renderizado com sucesso!! :)')
      return () => alert("mataste este componente :(")
    }, [])

    function gerarCor() {
      const hexadecimais = '0123456789ABCDEF'
      let cor = '#'

      for (let i = 0; i < 6; i++) {
        cor += hexadecimais[Math.floor(Math.random() * 16)]
      }

      setCor(cor)
    }

    return (
      <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
        <span>Mova o cursor do mouse para dentro do quadrado</span>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: cor,
            borderRadius: 5,
            cursor: 'pointer'
          }}
        />
        <button onClick={gerarCor}>nova cor</button>
      </div>
    )
  }`

export default function Effect({ open, setOpen }) {
  function Exemplo() {
    const [cor, setCor] = useState('#FFFFFF')

    // useEffect recebe dois parâmetros:
    // 1. Uma função que será executada quando o componente for renderizado
    // 2. Uma lista de dependências, que ao terem seu estado
    // alterado, executará a função novamente
    // retorna uma função que será executada quando o componente for desmontado
    useEffect(() => {
      alert('nova cor gerada -> ' + cor)
    }, [cor])

    // pode ser usado quantas vezes for necessário
    // até mesmo dentro de outros hooks
    useEffect(() => {
      alert('componente renderizado com sucesso!! :)')
      return () => alert("mataste este componente :(")
    }, [])

    function gerarCor() {
      const hexadecimais = '0123456789ABCDEF'
      let cor = '#'

      for (let i = 0; i < 6; i++) {
        cor += hexadecimais[Math.floor(Math.random() * 16)]
      }

      setCor(cor)
    }

    return (
      <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
        <span>Mova o cursor do mouse para dentro do quadrado</span>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: cor,
            borderRadius: 5,
            cursor: 'pointer'
          }}
        />
        <button onClick={gerarCor}>nova cor</button>
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
          width="820px"
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