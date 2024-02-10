import Alert from "./components/Alert"
import ListGroup from "./components/ListGroup"

function App() {
  const dawgNames = ["Fido", "Rex", "Buddy", "Champ", "Spot"]

  const onSelect = (itemName: string) => {
    console.log(`Selected ${itemName}`)
  }

  return (
    <div>
      <Alert type="success">
        <strong>Success!</strong> This is a success alert—check it out!
      </Alert>
      <ListGroup items={dawgNames} heading="Dawgs" onSelectItem={onSelect} />
    </div>
  )
}

export default App
