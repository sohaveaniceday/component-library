import useStorageState from '../useStorageState'

export const useSessionStorageState = (key: string, defaultValue?: any) => {
  return useStorageState(sessionStorage, key, defaultValue)
}
