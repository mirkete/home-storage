import { API_URL } from "../constants.js"

export async function uploadFile(file){

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData
    })

    return res
}