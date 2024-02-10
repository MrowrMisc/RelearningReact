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
    flexDirection: direction || undefined,
    justifyContent: justify || undefined,
    alignItems: align || "flex-start",
    flexWrap: wrap || (allowWrap === true ? "wrap" : (allowWrap === false ? "nowrap" : undefined)),
    alignContent: alignContent || undefined,
    gap: gap || undefined
  }

  return (
    <div css={styles}>
      {children}    
    </div>
  )
}

export default Container