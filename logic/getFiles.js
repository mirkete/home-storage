import path from 'node:path'
import fs from 'node:fs/promises'

export async function getFiles () {
  try {
    const files = await fs.readdir(path.join(process.cwd(), 'files'))

    for (let i = 0; i < files.length; i++) {
      const fileName = files[i]
      const filePath = path.join(process.cwd(), 'files', fileName)

      const extName = path.extname(fileName)
      const type = extName

      const { size, mtime: lastTime } = await fs.stat(filePath)

      files[i] = {
        name: files[i],
        type,
        size,
        lastTime
      }
    }
    const orderedFiles = files.sort((a, b) => a.type === '' ? -1 : 1)

    return orderedFiles
  } catch (e) {
    console.log(e)
    return null
  }
}
