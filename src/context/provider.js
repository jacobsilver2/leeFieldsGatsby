import React, { useReducer, createContext } from 'react'

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  isMuted: true,
  navButtonActive: '',
  secondaryMenuActive: false,
  cnnInView: true,
  mobileLogoOverride: true,
  tickerIsVisible: true,
}

function reducer(state, action) {
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

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
