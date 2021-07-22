const express = require('express')
const app = express()
const port = 3000

app.use(logger)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function logger(req, res, next) {
  const timeStart = new Date()
  const localTime = timeStart.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  const method = req.method
  const url = req.url
  console.log(`${localTime} | ${method} from ${url}`)
  next()
}