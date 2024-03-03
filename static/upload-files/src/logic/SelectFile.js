export async function uploadFile (file, apiHostName) {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch(`http://${apiHostName}:3000/api/upload`, {
        method: "POST",
        body: formData
    })

    return res
}