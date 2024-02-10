/** @jsxImportSource @emotion/react */

type Props = {
  children: React.ReactNode,
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly",
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline",
  wrap?: "wrap" | "nowrap" | "wrap-reverse",
  allowWrap?: boolean,
  alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around",
  gap?: string
}

function Container({ children, direction, justify, align, wrap, allowWrap, alignContent, gap }: Props) {
  const styles = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: direction || "row",
    justifyContent: justify || "flex-start",
    alignItems: align || "flex-start",
    flexWrap: wrap || (allowWrap ? "wrap" : "nowrap"),
    alignContent: alignContent || "flex-start",
    gap: gap || "0"
  }

  return (
    <div css={styles}>
      {children}    
    </div>
  )
}

export default Container