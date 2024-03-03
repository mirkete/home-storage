import { useEffect } from "react"
import "./Alert.css"

export function Alert({status, setStatus}){

  const statusClass = status === "off" ? "alert-off" : "alert-on"

  const statusIcons = {
    "off": "✅",
    "loading": "🕥",
    "uploaded": "✅"
  }

  const statusText = {
    "off": "",
    "loading": "Subiendo archivo...",
    "uploaded": "El archivo se subio correctamente"
  }

  useEffect(() => {
    console.log(status)
    const hideAlert = () => {
      setStatus("off")
    }

    let timeout
    if(status !== "off"){
      timeout = window.setTimeout(hideAlert, 5000)
    }

    return () => {
      window.clearTimeout(timeout)
    }
  }, [status])

  return(
    <div className={"alert " + statusClass}>
      <p>{statusIcons[status]}</p>
      {statusText[status]}
    </div>
  )
}