import { Router } from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { getFiles } from '../logic/getFiles.js'

function createRouter () {
  const mainRouter = Router()

  mainRouter.get('/', (req, res) => {
    res.send('ok')
  })

  mainRouter.get('/files', async (req, res) => {
    const files = await getFiles()

    if (files) return res.status(200).json(files)

    return res.status(500).send('Server error')
  })

  mainRouter.post('/upload', async (req, res) => {
    const file = req.files.file
    if (!file) {
      return res.status(400).send('no file uploaded. please specify one')
    }

    try {
      const { name, data } = file
      await fs.writeFile(path.join(process.cwd(), 'files', name), data, { encoding: 'utf-8' })
      const files = await getFiles()
      res.status(201).json(files)
    } catch (e) {
      res.status(500).send('server error')
    }
  })

  return mainRouter
}

export { createRouter }
