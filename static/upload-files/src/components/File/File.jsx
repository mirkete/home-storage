import { FileIcon } from "../../icons/FileIcon.jsx"
import { FolderIcon } from "../../icons/FolderIcon.jsx"
import { PAGE_COLORS } from "../../constants.js"

export function File({fileData}){

    const {name, type} = fileData
    
    const getIcon = (type) => {
        if(type === "file") return <FileIcon color={PAGE_COLORS[0]}/>
        
        return <FolderIcon color={PAGE_COLORS[0]}/>
    }

    return(
        <tr>
            <td>{getIcon(type)} </td>
            <td> {name} </td>
            <td> {type} </td>
            <td> 3,5 MB </td>
            <td> 13 Jul 2018, 19:55 </td>
            <td> <button>Descargar</button> </td>
        </tr>
    )
}