// Import required modules
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDb = require('./config/db')
const router = require('./Routers/producrRouter')
const userRouter = require('./Routers/userRouter')

// Load environment variables from .env file
dotenv.config()

// Initialize Express app
const app = express()

// Connect to MongoDB
ConnectDb()

// Middleware
app.use(cors())
app.use(express.json({ limit: '50mb' })) // 🔥 Ensures large JSON payloads are parsed

// Routes
app.use('/product', router)

app.use('/user',userRouter)
// Start server
const PORT = process.env.Port || 4000
app.listen(PORT, () => {
  console.log(`✅ Server Running successfully on Port ${PORT}`)
})
