import { useContext, Dispatch } from 'react'
import { GlobalStateContext, GlobalDispatchContext } from '../context'
import type { GlobalState, GlobalAction } from '../types'

export function useGlobalState(): GlobalState {
  const context = useContext(GlobalStateContext)
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalContextProvider')
  }
  return context
}

export function useGlobalDispatch(): Dispatch<GlobalAction> {
  const context = useContext(GlobalDispatchContext)
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a GlobalContextProvider')
  }
  return context
}
