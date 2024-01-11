export async function uploadFile(file){

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("http://192.168.1.42:3000/upload", {
        method: "POST",
        body: formData
    })

    return res
}