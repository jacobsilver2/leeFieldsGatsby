interface HamburgerMenuProps {
  isOpen: boolean
  menuClicked: () => void
  width?: number
  height?: number
  strokeWidth?: number
  rotate?: number
  color?: string
  borderRadius?: number
  animationDuration?: number
  className?: string
}

export const HamburgerMenu = ({
  isOpen,
  menuClicked,
  width,
  height,
  strokeWidth = 2,
  rotate = 0,
  color = "#000",
  borderRadius = 0,
  animationDuration = 0.4,
  className,
}: HamburgerMenuProps) => {
  const widthPx = (width || 36) + "px"
  const heightPx = (height || 30) + "px"
  const halfHeight = parseInt(heightPx.replace("px", "")) / 2 + "px"
  const halfStrokeWidth = "-" + strokeWidth / 2 + "px"

  const getTransformValue = (
    isOpen: boolean,
    defaultPos: string | number,
    rotateVal: number
  ) => {
    return (
      "translate3d(0," +
      (isOpen ? halfHeight : defaultPos) +
      ",0) rotate(" +
      (isOpen ? rotateVal + "deg" : "0") +
      ")"
    )
  }

  const styles = {
    container: {
      width: widthPx,
      height: heightPx,
      position: "relative" as const,
      transform: "rotate(" + rotate + "deg)",
    },
    lineBase: {
      display: "block",
      height: strokeWidth + "px",
      width: "100%",
      background: color,
      transitionTimingFunction: "ease",
      transitionDuration: animationDuration + "s",
      borderRadius: borderRadius + "px",
      transformOrigin: "center" as const,
      position: "absolute" as const,
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth,
    },
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: animationDuration / 4 + "s",
      opacity: isOpen ? "0" : "1",
      top: halfHeight,
      marginTop: halfStrokeWidth,
    },
    thirdLine: {
      transform: getTransformValue(isOpen, heightPx, -45),
      marginTop: halfStrokeWidth,
    },
  }

  return (
    <div style={styles.container} className={className} onClick={menuClicked}>
      <span style={Object.assign({}, styles.lineBase, styles.firstLine)} />
      <span style={Object.assign({}, styles.lineBase, styles.thirdLine)} />
    </div>
  )
}
