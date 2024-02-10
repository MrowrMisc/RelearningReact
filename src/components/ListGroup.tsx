import { useState } from "react"

interface Props {
  items: string[],
  heading: string,
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {  
  const [selectedItemName, setSelectedItemName] = useState("")

  const handleClick = (itemText: string) => {
    setSelectedItemName(itemText)
    onSelectItem(itemText)
  }

  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((itemText) => {
          return <li 
            key={itemText}
            onClick={() => handleClick(itemText)}
            className={
              `list-group-item${  
                selectedItemName === itemText ? " active" : ""}`
            }
          >
            {itemText}
          </li>
        })}
      </ul>
    </>
  )
}

export default ListGroup