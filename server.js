const express = require('express')
const path = require('path')
const app = express()
// const logger = require('./Middlewares/logger')

// Middlewares
// Logger middleware
// app.use(logger)

app.use(express.json())
app.use(express.urlencoded({
  extends: false
}))
// GET API Books endpoints
app.use('/api/books', require('./routes/books'))

// Papkani STATIC qilish
app.use(express.static(path.join(__dirname, 'public')))

// // DINAMIK KOD
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running to port: ${PORT}`))