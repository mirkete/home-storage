import { useEffect, useState } from "react"
import { API_URL } from "../../constants.js"
import { File } from "../File/File.jsx"
import "./FilesViewer.css"

function FilesViewer({filesCount}){

    const [files, setFiles] = useState([])

    
    useEffect(() => {
        fetch(`${API_URL}/files`)
        .then((res) => {return res.json()})
        .then((data) => setFiles(data))
    }, [filesCount])

    return(
        <table className="fw-table">
            <thead>
                <tr>
                    <td>{"  "}</td>
                    <td>Nombre del archivo</td>
                    <td>Tipo</td>
                    <td>Tamaño</td>
                    <td>Ultima modificacion</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {
                    files.map((file, i) => {
                        return <File key={"file" + i} fileData={file}></File>
                    })
                }
            </tbody>
        </table>
    )
}

export {FilesViewer}