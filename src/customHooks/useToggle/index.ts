import { useState, useMemo } from 'react'

type IState = string | number | boolean | undefined

export interface Actions<T = IState> {
  setLeft: () => void
  setRight: () => void
  toggle: (value?: T) => void
}

export const useToggle = (defaultValue: any, reverseValue?: any) => {
  const [state, setState] = useState(defaultValue)
  const reverseValueOrigin = useMemo(
    () => (reverseValue === undefined ? !defaultValue : reverseValue),
    [reverseValue]
  )

  const actions = useMemo(() => {
    const toggle = (value?: any) => {
      if (value !== undefined) {
        setState(value)
        return
      }
      setState((s: any) =>
        s === defaultValue ? reverseValueOrigin : defaultValue
      )
    }
    const setLeft = () => setState(defaultValue)
    const setRight = () => setState(reverseValueOrigin)
    return {
      toggle,
      setLeft,
      setRight,
    }
  }, [setState])

  return [state, actions]
}
