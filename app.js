const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('express good!')
})

app.get('/:language', (req, res) => {
  const language = req.params.language
  res.send(`<h1>I like coding by ${language}<h1>`)
})

app.listen(port, () => {
  console.log(`my server is running on http://localhost:${port}`)
})