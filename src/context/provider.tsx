import React, { useReducer, createContext, ReactNode, Dispatch } from 'react'
import type { GlobalState, GlobalAction } from '../types'

export const GlobalStateContext = createContext<GlobalState | undefined>(undefined)
export const GlobalDispatchContext = createContext<Dispatch<GlobalAction> | undefined>(undefined)

const initialState: GlobalState = {
  isMuted: true,
  navButtonActive: '',
  secondaryMenuActive: false,
  cnnInView: true,
  mobileLogoOverride: true,
  tickerIsVisible: true,
  videoModalOpen: false,
}

function reducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case 'CLOSE_NAV_BUTTON': {
      return {
        ...state,
        navButtonActive: '',
      }
    }
    case 'TOGGLE_SECONDARY_MENU': {
      return {
        ...state,
        secondaryMenuActive: !state.secondaryMenuActive,
      }
    }
    case 'SECONDARY_MENU_OFF': {
      return {
        ...state,
        secondaryMenuActive: false,
      }
    }
    case 'SECONDARY_MENU_ON': {
      return {
        ...state,
        secondaryMenuActive: true,
      }
    }
    case 'CNN_OFF': {
      return {
        ...state,
        cnnInView: false,
      }
    }
    case 'CNN_ON': {
      return {
        ...state,
        cnnInView: true,
      }
    }
    case 'TICKER_OFF': {
      return {
        ...state,
        tickerIsVisible: false,
      }
    }
    case 'TICKER_ON': {
      return {
        ...state,
        tickerIsVisible: true,
      }
    }
    case 'MOBILE_LOGO_OVERRIDE': {
      return {
        ...state,
        mobileLogoOverride: true,
      }
    }
    case 'MOBILE_LOGO_OVERRIDE_OFF': {
      return {
        ...state,
        mobileLogoOverride: false,
      }
    }
    default:
      throw new Error('Bad Action Type')
  }
}

interface GlobalContextProviderProps {
  children: ReactNode
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
