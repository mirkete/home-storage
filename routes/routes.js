import { Router } from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'

function createRouter () {
  const mainRouter = Router()

  mainRouter.get('/', (req, res) => {
    res.send('ok')
  })

  mainRouter.get('/files', async (req, res) => {
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

      res.status(200).json(orderedFiles)
    } catch (e) {
      res.status(500).send('server error')
    }
  })

  mainRouter.post('/upload', async (req, res) => {
    const file = req.files.file
    if (!file) {
      return res.status(400).send('no file uploaded. please specify one')
    }

    try {
      const { name, data } = file
      await fs.writeFile(path.join(process.cwd(), 'files', name), data, { encoding: 'utf-8' })
      res.status(200).send('file uploaded!')
    } catch (e) {
      console.log(e)
      res.status(500).send('server error')
    }
  })

  return mainRouter
}

export { createRouter }
