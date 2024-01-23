import "./App.css"
import { SelectFile } from "./components/SelectFile/SelectFile.jsx"
import {FilesViewer} from "./components/FilesViewer/FilesViewer.jsx"
import { useEffect, useState } from "react"
import { API_URL } from "./constants.js"

function App(){

  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/files`)
      .then((res) => {return res.json()})
      .then((data) => setFiles(data))
  }, [])

  return(
    <div className="container">
      <SelectFile setFiles={setFiles}></SelectFile>
      <FilesViewer files={files}></FilesViewer>
    </div>
  )
}

export default App