const express = require('express')
const app = express()
const port = 3000

app.use(logger)

app.get('/', (req, res) => {
  console.log('home')
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  console.log('new')
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  console.log('show')
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  console.log('add new')
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function logger(req, res, next) {
  console.log('START')
  const timeStart = Date.now()
  const localTime = timeStart.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  const method = req.method
  const url = req.originalUrl

  res.on('finish', () => {
    const timeEnd = Date.now()
    const totalTime = (timeEnd - timeStart)
    console.log(`${localTime} | ${method} from ${url} | total time: ${totalTime}ms`)
    console.log('END')
  })
  next()
}