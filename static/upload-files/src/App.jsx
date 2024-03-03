import "./App.css"
import { useEffect, useState } from "react"
import { SelectFile } from "./components/SelectFile/SelectFile.jsx"
import { FilesViewer } from "./components/FilesViewer/FilesViewer.jsx"
import { Alert } from "./components/Alert/Alert.jsx"

function App(){

  const [files, setFiles] = useState([])
  const [apiHostName, setApiHostName] = useState(null)
  const [uploadStatus, setUploadStatus] = useState("off")

  useEffect(() => {
    const url = new URL(window.location)
    const { hostname } = url
    const accessIP = hostname === "localhost" ? "127.0.0.1" : hostname
    setApiHostName(accessIP)
  }, [])

  useEffect(() => {
    if(apiHostName){
      fetch(`http://${apiHostName}:3000/api/files`)
      .then((res) => res.json())
      .then((data) => setFiles(data))
    }
  }, [apiHostName])

  return(
    <div className="container">
      <SelectFile uploadStatus={uploadStatus} setUploadStatus={setUploadStatus} apiHostName={apiHostName} setFiles={setFiles}></SelectFile>
      <FilesViewer apiHostName={apiHostName} files={files}></FilesViewer>
      <Alert status={uploadStatus} setStatus={setUploadStatus}></Alert>
    </div>
  )
}

export default App