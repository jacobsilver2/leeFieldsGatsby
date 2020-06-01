import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  isMuted: true,
  navButtonActive: "",
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
