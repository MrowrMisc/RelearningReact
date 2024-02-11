/** @jsxImportSource @emotion/react */

import { css, Global } from "@emotion/react"
import Container from "./components/core/Container"
import ContainerItem from "./components/core/ContainerItem"
import Something from "./components/Something"

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
        <ContainerItem><Item text="Item 1"></Item></ContainerItem>
        <ContainerItem flex="3"><Something /></ContainerItem>
        <ContainerItem flex="6"><Item text="Item 3"></Item></ContainerItem>
      </Container>
    </>
  )
}

export default App
