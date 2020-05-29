const React = require("react")
const GlobalContextProvider = require("./src/context/provider").default

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
