/** @jsxImportSource @emotion/react */

import { css, Global } from "@emotion/react"
import Container from "./components/Container"
import Box from "./components/Box"

const globalCss = css`
  html, body, #root { height: 100%; margin: 0; }
  body {
    border: 1px solid #ff00ff;
  }
`

function Item({ text }: { text: string }) {
  return (
    <div css={{ minWidth: 100, minHeight: 100, border: "2px solid purple" }}>{text}</div>
  )
}

function App() {
  return (
    <>
      <Global styles={globalCss} />
      <Container gap="10px">
        <Box><Item text="Item 1"></Item></Box>
        <Box><Item text="Item 2"></Item></Box>
        <Box grow={1}><Item text="Item 3"></Item></Box>
      </Container>
    </>
  )
}

export default App
