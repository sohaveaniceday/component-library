import { useCallback, useRef } from 'react'

export type noop = (...args: any[]) => any

export const usePersistFn = (fn: Function) => {
  const ref = useRef<any>(() => {
    throw new Error('Cannot call function while rendering.')
  })

  ref.current = fn

  const persistFn = useCallback((...args) => ref.current(...args), [ref])

  return persistFn
}
