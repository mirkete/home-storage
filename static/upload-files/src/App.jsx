import "./App.css"
import { SelectFile } from "./components/SelectFile/SelectFile.jsx"
import {FilesViewer} from "./components/FilesViewer/FilesViewer.jsx"
import { useState } from "react"

function App(){

  const [filesCount, setFilesCount] = useState([])

  return(
    <div className="container">
      <SelectFile filesCount={filesCount} setFilesCount={setFilesCount}></SelectFile>
      <FilesViewer filesCount={filesCount}></FilesViewer>
    </div>
  )
}

export default App