export type AnyObject = { [key: string]: string | number }

export type Error = { message: string }

export type DataFetchState = {
  isLoading: boolean
  isError: boolean
  data: any
  fetchActive: boolean
  apiQueryFunc: (...args: any[]) => any
  apiArguments: ApiArgument[]
  errors: Error[]
}

export type FetchSuccessPayload = AnyObject | AnyObject[]

export type ApiArgument =
  | string
  | null
  | number
  | boolean
  | AnyObject
  | string[]

export type ActionTypes = {
  type:
    | `FETCH_CLEAR`
    | `FETCH_INIT`
    | `FETCH_SUCCESS`
    | `FETCH_FAILURE`
    | `UPDATE_API_ARGUMENTS`
  payload?: FetchSuccessPayload | ApiArgument[] | Error[]
}
