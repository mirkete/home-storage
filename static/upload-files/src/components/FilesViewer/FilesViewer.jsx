import { useContext, useState, useEffect } from "react"
import { RouteContext } from "../../contexts/RouteContext.js"
import { File } from "../File/File.jsx"
import "./FilesViewer.css"

function FilesViewer({files, setFiles}){

    const route = useContext(RouteContext)
    const hostname = route?.hostname ?? null
    const path = route?.path ?? "loading"

    useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    if(hostname && path !== "loading"){
        fetch(`http://${hostname}:3000/api/files${path}`, {signal})
        .then((res) => res.json())
        .then((data) => setFiles(data))
    }

    return () => {
        controller.abort()
    }
    }, [hostname, path])

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