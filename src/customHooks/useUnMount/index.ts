import { useEffect, useRef } from 'react'

export const useUnmount = (fn: any) => {
  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffect(
    () => () => {
      if (fnRef.current && typeof fnRef.current === 'function') {
        fnRef.current()
      }
    },
    []
  )
}
