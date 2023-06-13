const express = require('express')
const path = require('path')
const app = express()

// STATIC KOD
app.use(express.static(path.join(__dirname, 'public')))

// // DINAMIK KOD
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running to port: ${PORT}`))