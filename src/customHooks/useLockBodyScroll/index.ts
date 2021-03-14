import { useLayoutEffect } from 'react'

export const useLockBodyScroll = (active = true): void => {
  useLayoutEffect(() => {
    if (active) {
      // Get original value of body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalStyle
      }
    } else return
  }, [active])
}
