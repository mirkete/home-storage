import { createContext } from "react";

export const RouteContext = createContext({
  hostname: null,
  path: null
})