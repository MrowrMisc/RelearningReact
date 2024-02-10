type Props = {
  children: React.ReactNode,
  type: "success" | "danger" | "warning"
}

function Alert({ children, type }: Props) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  )
}

export default Alert