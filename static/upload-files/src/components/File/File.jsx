import { FileIcon } from "../../icons/FileIcon.jsx"
import { FolderIcon } from "../../icons/FolderIcon.jsx"
import { PAGE_COLORS } from "../../constants.js"
import { API_URL } from "../../constants.js"
import { DownloadIcon } from "../../icons/DownloadIcon.jsx"
import "./File.css"

export function File({fileData}){

    const {name, type, size, lastTime} = fileData
    
    const getIcon = (type) => {
        if(type === "file") return <FileIcon color={PAGE_COLORS[0]}/>
        
        return <FolderIcon color={PAGE_COLORS[0]}/>
    }

    const getDownloadURL = (fileName) => {
        return `${API_URL}/files/${fileName}`
    }

    const getFileDate = (lastTime) => {

        const dateObj = new Date(lastTime)

        const date = dateObj.getDate()
        const month = dateObj.getMonth() + 1
        const year = dateObj.getFullYear()
        const hour = dateObj.getHours() + ":" + dateObj.getMinutes()

        return `${date}-${month}-${year} ${hour}`
    }

    return(
        <tr>
            <td>{getIcon(type)} </td>
            <td> {name} </td>
            <td> {type} </td>
            <td> {Math.ceil(size / 1000)} KB</td>
            <td> {getFileDate(lastTime)} </td>
            <td> 
                <a className="fl-download-anchor" href={getDownloadURL(name)}>
                    <DownloadIcon></DownloadIcon>
                </a> 
            </td>
        </tr>
    )
}