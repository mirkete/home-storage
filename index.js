import express from 'express'
import { createRouter } from './routes/routes.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'

// Create server
const app = express()

// Middlewares
app.use(cors())
app.use(express.static('static'))
app.use(fileUpload())

// Routes
app.use('/', createRouter())

app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})
