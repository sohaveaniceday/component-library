import { useRef } from 'react'

export type compareFunction<T> = (prev: T | undefined, next: T) => boolean

export const usePrevious = (
  state: any,
  compare?: compareFunction<any>
): any => {
  const prevRef = useRef<any>()
  const curRef = useRef<any>()

  const needUpdate =
    typeof compare === 'function' ? compare(curRef.current, state) : true
  if (needUpdate) {
    prevRef.current = curRef.current
    curRef.current = state
  }

  return prevRef.current
}
