import path from 'node:path'
import fs from 'node:fs/promises'

export async function getFiles () {
  try {
    const files = await fs.readdir(path.join(process.cwd(), 'files'))

    for (let i = 0; i < files.length; i++) {
      const extName = path.extname(files[i])
      const type = extName ? 'file' : 'folder'

      files[i] = {
        name: files[i],
        type
      }
    }

    const orderedFiles = files.sort((a, b) => a.type === 'folder' ? -1 : 1)

    return orderedFiles
  } catch (e) {
    return null
  }
}
