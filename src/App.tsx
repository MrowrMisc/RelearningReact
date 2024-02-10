
import ListGroup from "./components/ListGroup"

function App() {
  const dawgNames = ["Fido", "Rex", "Buddy", "Champ", "Spot"]

  const onSelect = (itemName: string) => {
    console.log(`Selected ${itemName}`)
  }

  return (
    <div>
      <ListGroup items={dawgNames} heading="Dawgs" onSelectItem={onSelect} />
    </div>
  )
}

export default App
