const express = require('express')
const path = require('path')
const app = express()
const books = require('./Books')
const logger = require('./Middlewares/logger')

// Middlewares
// Logger middleware
app.use(logger)

// GET All json-books
app.get('/api/books', (req, res) => {
  res.json(books)
})

// GET ById book
app.get('/api/books/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if (isExist) {
    res.json(books.filter(book => book.id === parseInt(req.params.id)))
  } else {
    res.status(404).json({
      message: `Siz qidirgan ${req.params.id} chi idlik book topilmadi.`
    })
  }
})

// Papkani STATIC qilish
app.use(express.static(path.join(__dirname, 'public')))

// // DINAMIK KOD
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running to port: ${PORT}`))