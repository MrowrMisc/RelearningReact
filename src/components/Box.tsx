/** @jsxImportSource @emotion/react */

type Props = {
  children: React.ReactNode,
  grow?: number,
}

function Box({ children, grow }: Props) {
  return (
    <div css={{
      border: "4px solid blue",
      flexGrow: grow || 0
      // width: "100%",
      // height: "100%"
    }}>
      {children}    
    </div>
  )
}

export default Box