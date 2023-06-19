const {
  Router
} = require('express')
const uuid = require('uuid')
const router = Router()
const books = require('../Books')

// GET All json-books
router.get('/', (req, res) => {
  res.json(books)
})

// GET ById book
router.get('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if (isExist) {
    res.json(books.filter(book => book.id === parseInt(req.params.id)))
  } else {
    res.status(404).json({
      message: `Siz qidirgan ${req.params.id} chi idlik book topilmadi.`
    })
  }
})

// POST new book ADD
router.post('/', (req, res) => {
  const newAddBook = {
    id: uuid.v4(),
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  }
  // VALIDATE
  if (!req.body.name || !req.body.author || !req.body.pages) {
    return res.status(400).json({
      message: 'Ma\'lumotni kiriting...!'
    })
  }

  books.push(newAddBook)
  res.json(books)
})

// PUT Edit ById book
router.put('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))
  if (isExist) {
    const updateBook = req.body
    books.forEach(book => {
      if (book.id === parseInt(req.params.id)) {
        book.name = updateBook.name ? updateBook.name : book.name
        book.author = updateBook.author ? updateBook.author : book.author
        book.pages = updateBook.pages ? updateBook.pages : book.pages

        res.status(200).json({
          message: "Book ma`lumoti yangilandi...😎",
          book
        })
      }
    })
  } else {
    res.status(404).json({
      message: `Siz qidirgan ${req.params.id} chi idlik book topilmadi.`
    })
  }
})

module.exports = router