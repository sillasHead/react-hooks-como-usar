import { Button } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import Effect from './hooks/Effect'
import Ref from './hooks/Ref'
import State from './hooks/State'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100vh;
  width: 100vw;
`


function App() {
  const [openRef, setOpenRef] = useState(false)
  const [openState, setOpenState] = useState(false)
  const [openEffect, setOpenEffect] = useState(false)

  return (
    <Container>
      <Button variant="contained" onClick={() => setOpenRef(true)}>
        open useRef
      </Button>
      <Button variant="contained" onClick={() => setOpenState(true)}>
        open useState
      </Button>
      <Button variant="contained" onClick={() => setOpenEffect(true)}>
        open useEffect
      </Button>
      <Ref open={openRef} setOpen={setOpenRef} />
      <State open={openState} setOpen={setOpenState} />
      <Effect open={openEffect} setOpen={setOpenEffect} />
    </Container>
  )
}

export default App
