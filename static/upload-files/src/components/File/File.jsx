import { FileIcon } from "../../icons/FileIcon.jsx"
import { FolderIcon } from "../../icons/FolderIcon.jsx"
import { PAGE_COLORS } from "../../constants.js"
import { DownloadIcon } from "../../icons/DownloadIcon.jsx"
import "./File.css"

export function File({fileData, apiUrl}){

    const {name, type, size:fileSize, lastTime} = fileData

    const icon = type ? <FileIcon color={PAGE_COLORS[0]}/> : <FolderIcon color={PAGE_COLORS[0]}/>
    const size = type ? `${Math.ceil(fileSize / 1000)} KB` : "" 

    const getDownloadURL = (fileName) => {
        return `http://${apiUrl}:3000/api/files/${fileName}`
    }

    const getFileDate = (lastTime, type) => {

        if(!type) return ""

        const dateObj = new Date(lastTime)

        const date = dateObj.getDate()
        const month = dateObj.getMonth() + 1
        const year = dateObj.getFullYear()
        const hour = dateObj.getHours() + ":" + dateObj.getMinutes()

        return `${date}-${month}-${year} ${hour}`
    }

    return(
        <tr>
            <td> {icon} </td>
            <td> {name} </td>
            <td> {type} </td>
            <td> {size} </td>
            <td> {getFileDate(lastTime, type)} </td>
            <td> 
                {
                    type &&
                    <a className="fl-download-anchor" href={getDownloadURL(name)}>
                        <DownloadIcon></DownloadIcon>
                    </a> 
                }
            </td>
        </tr>
    )
}