import { useState } from "react"
import "./App.css"
import { SelectFile } from "./components/SelectFile/SelectFile.jsx"
import {FilesViewer} from "./components/FilesViewer/FilesViewer.jsx"

function App(){

  const [page, setPage] = useState("upload")

  const handleClick = () => {
    const newPage = page === "upload" ? "files" : "upload"
    setPage(newPage)
  }

  return(
    <div className="container">
      <button className="nav-button" onClick={handleClick}>Cambiar de pagina</button>
      {page === "upload" && <SelectFile></SelectFile>}
      {page === "files" && <FilesViewer></FilesViewer>}
    </div>
  )
}

export default App