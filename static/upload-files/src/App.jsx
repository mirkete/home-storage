import "./App.css"
import { SelectFile } from "./components/SelectFile/SelectFile.jsx"
import { FilesViewer } from "./components/FilesViewer/FilesViewer.jsx"
import { useEffect, useRef, useState } from "react"
import { Input } from "./components/Input/Input.jsx"
import { Button } from "./components/Button/Button.jsx"
import { Loader } from "./components/Loader/Loader.jsx"

function App(){

  const [files, setFiles] = useState([])
  const [apiUrl, setApiUrl] = useState(null)
  const [loading, setLoading] = useState(true)
  const inputData = useRef("")

  const changeApiUrl = (e) => inputData.current = e.target.value

  const handleClick = () => {
    window.localStorage.setItem("API_URL", inputData.current)
    setApiUrl(inputData.current)
  }

  useEffect(() => {
    const savedApiUrl = window.localStorage.getItem("API_URL")
    if(savedApiUrl) setApiUrl(savedApiUrl)
    setLoading(false)
  }, [])

  useEffect(() => {
    if(apiUrl){
      fetch(`http://${apiUrl}:3000/api/files`)
      .then((res) => {return res.json()})
      .then((data) => setFiles(data))
    }
  }, [apiUrl])

  return(
    <div className="container">
      {loading && <Loader></Loader> }
      {
        (!loading && apiUrl)
        ? 
        <> 
          <SelectFile setFiles={setFiles}></SelectFile>
          <FilesViewer apiUrl={apiUrl} files={files}></FilesViewer>
        </>
        : 
        <div className="ip-container">
          <span className="big-title"><h1>Para empezar, ingrese su dirección IP local</h1></span>
          <Input onChange={changeApiUrl} placeholder="Dirección IP. Ejemplo: 192.xxx.xxx"></Input>
          <Button onClick={handleClick} style={{alignSelf:"center"}}>Establecer</Button>
        </div>
      }
    </div>
  )
}

export default App