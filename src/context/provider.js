import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  isMuted: true,
  navButtonActive: "",
  secondaryMenuActive: false,
  video: "--nTlj66uRE",
  cnnInView: true,
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SOUND": {
      return {
        ...state,
        isMuted: state.isMuted === true ? false : true,
      }
    }
    case "SHOWS_ACTIVE": {
      return {
        ...state,
        navButtonActive: state.navButtonActive === "shows" ? "" : "shows",
      }
    }
    case "MERCH_ACTIVE": {
      return {
        ...state,
        navButtonActive: state.navButtonActive === "merch" ? "" : "merch",
      }
    }
    case "INFO_ACTIVE": {
      return {
        ...state,
        navButtonActive: state.navButtonActive === "info" ? "" : "info",
      }
    }
    case "CLOSE_NAV_BUTTON": {
      return {
        ...state,
        navButtonActive: "",
      }
    }
    case "TOGGLE_SECONDARY_MENU": {
      return {
        ...state,
        secondaryMenuActive: !state.secondaryMenuActive,
      }
    }
    case "SECONDARY_MENU_OFF": {
      return {
        ...state,
        secondaryMenuActive: false,
      }
    }
    case "SECONDARY_MENU_ON": {
      return {
        ...state,
        secondaryMenuActive: true,
      }
    }
    case "DONT_LEAVE_ME_THIS_WAY": {
      return {
        ...state,
        video: "--nTlj66uRE",
      }
    }
    case "FAITHFUL_MAN": {
      return {
        ...state,
        video: "94o5Lli-9gA",
      }
    }
    case "CNN_OFF": {
      return {
        ...state,
        cnnInView: false,
      }
    }
    case "CNN_ON": {
      return {
        ...state,
        cnnInView: true,
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
