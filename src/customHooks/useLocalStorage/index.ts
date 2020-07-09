import useStorageState from '../useStorageState'

export const useLocalStorageState = (key: string, defaultValue?: any) => {
  return useStorageState(localStorage, key, defaultValue)
}
