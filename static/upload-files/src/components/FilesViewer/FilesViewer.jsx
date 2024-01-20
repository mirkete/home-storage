import { useEffect, useState } from "react"
import { API_URL } from "../../constants.js"
import { FileIcon } from "../../icons/FileIcon.jsx"
import { FolderIcon } from "../../icons/FolderIcon.jsx"
import { PAGE_COLORS } from "../../constants.js"
import "./FilesViewer.css"

function FilesViewer({filesCount}){

    const [files, setFiles] = useState([])

    
    useEffect(() => {
        fetch(`${API_URL}/files`)
        .then((res) => {return res.json()})
        .then((data) => setFiles(data))
    }, [filesCount])
    
    const getIcon = (type) => {
        if(type === "file") return <FileIcon color={PAGE_COLORS[0]}/>
        
        return <FolderIcon color={PAGE_COLORS[0]}/>
    }

    return(
        <ul className="files-viewer">
            {files.map((file, i) => {
                return (
                <li className="file" key={`file${i}`}>
                    {getIcon(file.type)}
                    <p>{file.name} - {file.type} </p>
                </li>)
            })}
        </ul>
    )
}

export {FilesViewer}