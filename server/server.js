import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import aiRoutes from './routes/aiRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/ai', aiRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
