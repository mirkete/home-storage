import express from 'express'
import cors from 'cors'
import path from 'node:path'
import fileUpload from 'express-fileupload'
import { createAPIRouter } from './routes/apiRoutes.js'
import { createMainRouter } from './routes/mainRoutes.js'

// Create server
const app = express()

// Middlewares
app.use(cors())
app.use(express.static(path.join('static', 'upload-files', 'dist')))
app.use(fileUpload())

// Routes
app.use('/', createMainRouter())
app.use('/api', createAPIRouter())

app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})
