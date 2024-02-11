/** @jsxImportSource @emotion/react */

type Props = {
  children: React.ReactNode,
  grow?: number,
  shrink?: number,
  basis?: string,
  flex?: string,
  align?: "auto" | "center" | "flex-start" | "flex-end" | "stretch" | "baseline",
  order?: number
}

function ContainerItem({ children, grow, shrink, basis, flex, align, order }: Props) {
  return (
    <div css={{
      border: "4px solid blue",
      flexGrow: grow || undefined,
      flexShrink: shrink || undefined,
      flexBasis: basis || undefined,
      flex: flex || undefined,
      alignSelf: align || "auto",
      order: order || undefined
    }}>
      {children}    
    </div>
  )
}

export default ContainerItem