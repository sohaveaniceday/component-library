export const translateHeightOrWidthClassNameValue = (
  sizeString?: string | undefined,
  multiplier = 1
): number => {
  const translateString = (size?: string): number => {
    switch (size) {
      case 'xs':
        return 1.5
      case 'sm':
        return 2
      case 'lg':
        return 3
      case 'xl':
        return 3.5
      case '2xl':
        return 4
      default:
        return 2.5
    }
  }
  return translateString(sizeString) * multiplier
}
