import { useEffect, useState } from "react"

function FilesViewer(){

    const [files, setFiles] = useState([])

    useEffect(() => {
        fetch("http://192.168.1.42:3000/files")
        .then((res) => {return res.json()})
        .then((data) => setFiles(data))
    })

    return(
        <ul>
            <li>Archivos</li>
            {files.map((fileName, i) => {
                return (<li key={`file${i}`}>{fileName} </li>)
            })}
        </ul>
    )
}

export {FilesViewer}