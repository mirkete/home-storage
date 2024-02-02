import { File } from "../File/File.jsx"
import "./FilesViewer.css"

function FilesViewer({files, apiUrl}){

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
                        return <File apiUrl={apiUrl} key={"file" + i} fileData={file}></File>
                    })
                }
            </tbody>
        </table>
    )
}

export {FilesViewer}