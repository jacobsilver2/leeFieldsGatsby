import { wrapRootElement as wrap } from "./rootWrapper"
//according to a stack overflow thread I found, using wrapPageElement instead of wrapRootElement works better with
//styled components and will get rid of the FOUC.
export const wrapPageElement = wrap

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
//   //   if (location === prevLocation) {
//   //     return true
//   //   }
//   //   if (location !== prevLocation) {
//   //     return false
//   //   }
// }

// export const onRouteUpdate = () => {
//   console.log("onRouteUpdate") // this works
// }
