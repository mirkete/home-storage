import { useState, useEffect } from "react"
import { uploadFile } from "../../logic/SelectFile.js"
import "./SelectFile.css"

function SelectFile({filesCount, setFilesCount}){
    const [file, setFile] = useState(null)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        async function sendData(file){
            const res = await uploadFile(file)
            return res
        }

        if(file){
            setLoading(true)
            sendData(file)
            .then((res) => {return res.text()})
            .then((text) => {
                setResponse(text)
                setFilesCount(filesCount + 1)
                setLoading(false)
            })
            .catch((e) => {
                console.error(e)
                setLoading(false)
            })
        }

        setFile(null)
    }, [file, setFilesCount, filesCount])

    const handleSubmit = (e) => {
        const file = e.target.files[0]
        setFile(file)
    }

    return(
        <form className="form" id="files-form" name="files-form">
            <label><h1>Subir archivos</h1></label>
            <label htmlFor="file" className="primary-button">
                {loading && <div className="spinner"></div> }
                {(!loading && !response) && <p>Seleccionar archivo</p> }
                {(!loading && response) && <p><b>✓ Archivo subido!</b></p> }
            </label>
            <input onChange={handleSubmit} type="file" id="file"/>
        </form>
    )
}

export {SelectFile}