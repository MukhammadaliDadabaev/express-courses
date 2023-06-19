const {
  Router
} = require('express')
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

module.exports = router