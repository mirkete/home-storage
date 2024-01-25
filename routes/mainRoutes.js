import { Router } from 'express'
import path from 'node:path'

export function createMainRouter () {
  const mainRouter = Router()

  mainRouter.get('/', (req, res) => {
    const filePath = path.join(process.cwd(), 'static', 'upload-files', 'dist', 'index.html')

    res.sendFile(filePath)
  })

  return mainRouter
}
