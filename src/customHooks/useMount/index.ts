import { useEffect } from 'react'
import { usePersistFn } from '../usePersistFn'

export const useMount = (fn: any) => {
  const fnPersist = usePersistFn(fn)

  useEffect(() => {
    if (fnPersist && typeof fnPersist === 'function') {
      fnPersist()
    }
  }, [])
}
