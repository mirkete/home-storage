export async function uploadFile (file, apiHostName, route) {

    const formData = new FormData()
    formData.append("file", file)
    formData.append("route", route)

    const res = await fetch(`http://${apiHostName}:3000/api/upload`, {
        method: "POST",
        body: formData
    })

    return res
}