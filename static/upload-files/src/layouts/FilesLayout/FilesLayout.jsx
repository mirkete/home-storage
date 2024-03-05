import "./FilesLayout.css"
import { useState, useEffect } from "react"
import { RouteContext } from "../../contexts/RouteContext"
import { Navigator } from "../../components/Navigator/Navigator"

export function FilesLayout({children}){

  const [route, setRoute] = useState(null)

  useEffect(() => {
    const url = new URL(window.location)
    const { hostname, pathname } = url
    const fixedPath = pathname === "/" ? "" : pathname
    const accessIP = hostname === "localhost" ? "127.0.0.1" : hostname
    setRoute({
      hostname:accessIP,
      path:fixedPath
    })
  }, [])

  return(
    <div className="container">
      <RouteContext.Provider value={route}>
        <Navigator></Navigator>
        {children}
      </RouteContext.Provider>
    </div>
  )
}