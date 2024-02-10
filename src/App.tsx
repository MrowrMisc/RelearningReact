import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
import ListGroup from "./components/ListGroup"

function App() {
  const dawgNames = ["Fido", "Rex", "Buddy", "Champ", "Spot"]

  const [alertText, setAlertText] = useState("")
  const [selectedDawg, setSelectedDawg] = useState("")

  const onSelect = (itemName: string) => {
    setSelectedDawg(itemName)
  }

  const onButtonClick = () => {
    setAlertText(`The selected dawg is: ${selectedDawg}`)
  }

  const onAlertClose = () => {
    setAlertText("")
  }

  return (
    <div>
      <Alert type="success" onClose={onAlertClose} visible={alertText.trim() !== ""}>{alertText}</Alert>
      <ListGroup items={dawgNames} heading="Dawgs" onSelectItem={onSelect} />
      <Button type="danger" onClick={onButtonClick}>
        Click me!
      </Button>
    </div>
  )
}

export default App
