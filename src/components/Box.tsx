import React from "react"

type Props = {
  children: React.ReactNode
}

function Box({ children }: Props) {
  return (
    <div>
      <h1>Box</h1>
      {children}    
    </div>
  )
}

export default Box