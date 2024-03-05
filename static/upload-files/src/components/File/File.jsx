import "./File.css"
import { useContext } from "react"
import { FileIcon } from "../../icons/FileIcon.jsx"
import { FolderIcon } from "../../icons/FolderIcon.jsx"
import { PAGE_COLORS } from "../../constants.js"
import { DownloadIcon } from "../../icons/DownloadIcon.jsx"
import { useNavigate } from "react-router-dom"
import { RouteContext } from "../../contexts/RouteContext.js"

export function File({fileData}){

    const navigate = useNavigate()
    const {name, type, size:fileSize, lastTime} = fileData
    const route = useContext(RouteContext)
    const {hostname, path} = route

    const icon = type ? <FileIcon color={PAGE_COLORS[0]}/> : <FolderIcon color={PAGE_COLORS[0]}/>
    const size = type ? `${Math.ceil(fileSize / 1000)} KB` : "" 
    const typeClass = type === "" ? "folder" : ""

    const openFolder = () => {
        navigate(`${path}${name}`)
    }

    const FileElement = ({children}) => {
        if(type === ""){
            return (
                <tr onClick={openFolder} className={typeClass}>
                    <td>{icon}</td>
                    <td>{name}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                </tr>
            )
        }
        return <tr className={typeClass}>{children}</tr>
    }

    const getDownloadURL = (fileName) => {
        return `http://${hostname}:3000/api/files${path}/${fileName}`
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
        <FileElement>
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
        </FileElement>
    )
}