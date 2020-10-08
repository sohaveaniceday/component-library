import { useEffect, useState } from 'react'

export const useDelayedUnmounting = (
  time = 500
): { mountingState: string; show: () => void; hide: () => void } => {
  const [mountingState, setMountingState] = useState('unmounted')
  const show = () => {
    if (mountingState === 'unmounting') {
      return
    }
    setMountingState('mounting')
  }
  const hide = () => {
    if (mountingState === 'mounting') {
      return
    }
    setMountingState('unmounting')
  }

  useEffect(() => {
    let timeoutId: number
    if (mountingState === 'unmounting') {
      timeoutId = setTimeout(() => {
        setMountingState('unmounted')
      }, time)
    } else if (mountingState === 'mounting') {
      timeoutId = setTimeout(() => {
        setMountingState('mounted')
      }, time)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [mountingState, time])

  return { mountingState, show, hide }
}
