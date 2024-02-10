type Props = {
  visible: boolean,
  children: React.ReactNode,
  type: "success" | "danger" | "warning",
  onClose: () => void
}

// TODO: would be cool to put this into a Context!
function Alert({ visible, children, type, onClose }: Props) {
  if (!visible) return null
  return (
    <div className={`alert alert-dismissible alert-${type}`} role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose} ></button>
    </div>
  )
}

export default Alert
