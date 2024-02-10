/** @jsxImportSource @emotion/react */

import { css, Global } from "@emotion/react"
import Container from "./components/Container"

const globalCss = css`
  html, body, #root { height: 100%; margin: 0; }
  body {
    border: 1px solid #ff00ff;
  }
`

function App() {
  return (
    <>
      <Global styles={globalCss} />
      <Container direction="column" align="center" justify="space-evenly">
        <div css={{ border: "1px solid red" }}>Div 1</div>
        <div css={{ border: "1px solid blue" }}>Div 2</div>
        <div css={{ border: "1px solid green" }}>Div 3</div>
      </Container>
    </>
  )
}

export default App
