import React from "react"

type Props = {
  children: React.ReactNode,
  type?: "success" | "danger" | "warning",
  onClick: () => void
}

function Button({ children, type, onClick }: Props) {
  return (
    <button className={`btn btn-${type || "primary"}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button