import { useState, useContext } from "react"
import { RouteContext } from "../../contexts/RouteContext"
import { FilesLayout } from "../../layouts/FilesLayout/FilesLayout"
import { SelectFile } from "../../components/SelectFile/SelectFile"
import { FilesViewer } from "../../components/FilesViewer/FilesViewer"
import {Alert} from "../../components/Alert/Alert"

export function Folder(){

  const route = useContext(RouteContext)

  const [uploadStatus, setUploadStatus] = useState("off")
  const [files, setFiles] = useState([])

  return(
    <FilesLayout>
      <SelectFile uploadStatus={uploadStatus} setFiles={setFiles} setUploadStatus={setUploadStatus}></SelectFile>
      <FilesViewer files={files} setFiles={setFiles}></FilesViewer>
      <Alert status={uploadStatus} setStatus={setUploadStatus}></Alert>
    </FilesLayout>
  )
}