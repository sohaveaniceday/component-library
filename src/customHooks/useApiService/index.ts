import { useEffect, useReducer, useCallback } from 'react'
import {
  DataFetchState,
  ActionTypes,
  FetchSuccessPayload,
  ApiArgument,
  Error,
} from './types'

const dataFetchReducer = (
  state: DataFetchState,
  { type, payload }: ActionTypes
): DataFetchState => {
  if (type === `FETCH_CLEAR`)
    return {
      ...state,
      isLoading: false,
      isError: false,
      data: null,
    }
  if (type === `FETCH_INIT`) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    }
  }
  if (type === `FETCH_SUCCESS`) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      data: payload as FetchSuccessPayload,
    }
  }
  if (type === `FETCH_FAILURE`)
    return {
      ...state,
      isLoading: false,
      isError: true,
      errors: payload as Error[],
    }
  if (type === `UPDATE_API_ARGUMENTS`)
    return {
      ...state,
      apiArguments: payload as ApiArgument[],
      fetchActive: true,
    }
  return state
}

export const useApiService = (
  apiQueryFunc: (...args: any[]) => any,
  initialApiArguments: ApiArgument[],
  initialData: null,
  doInitialFetch = true
): DataFetchState => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
    fetchActive: doInitialFetch,
    apiArguments: initialApiArguments,
    apiQueryFunc,
    errors: [],
  })

  useEffect(() => {
    let didCancel = false
    const fetchData = async (): Promise<void> => {
      dispatch({ type: `FETCH_INIT` })

      if (
        state.apiArguments.every((x: ApiArgument) => x === null) &&
        state.apiArguments.length > 0
      ) {
        return dispatch({ type: `FETCH_CLEAR` })
      }

      try {
        const result = await apiQueryFunc(...state.apiArguments)

        if (!didCancel) {
          dispatch({ type: `FETCH_SUCCESS`, payload: result })
        }
      } catch (errors) {
        if (!didCancel) {
          dispatch({ type: `FETCH_FAILURE`, payload: errors })
        }
      }
    }
    if (state.fetchActive) {
      fetchData()
    }
    return (): void => {
      didCancel = true
    }
  }, [apiQueryFunc, state.apiArguments, state.fetchActive])

  const updateState = useCallback((newState: ApiArgument[]) => {
    dispatch({ type: `UPDATE_API_ARGUMENTS`, payload: newState })
  }, [])

  return { ...state, apiQueryFunc: updateState }
}
