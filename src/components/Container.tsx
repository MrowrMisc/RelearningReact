/** @jsxImportSource @emotion/react */

type Props = {
  children: React.ReactNode,
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly",
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline"
}

function Container({ children, direction = "row", justify = "flex-start", align = "flex-start" }: Props) {
  return (
    <div css={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align
    }}>
      {children}    
    </div>
  )
}

export default Container