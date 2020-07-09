import { useMemo } from 'react'
import { useToggle } from '../useToggle'

interface Actions {
  setTrue: () => void
  setFalse: () => void
  toggle: (value?: boolean | undefined) => void
}

export const useBoolean = (defaultValue = false): [boolean, Actions] => {
  const [state, { toggle }] = useToggle(defaultValue)

  const actions: Actions = useMemo(() => {
    const setTrue = () => toggle(true)
    const setFalse = () => toggle(false)
    return { toggle, setTrue, setFalse }
  }, [toggle])

  return [state, actions]
}
