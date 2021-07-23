const express = require('express')
const exphbs = require('express-handlebars')
const moment = require('moment')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(logger)

app.get('/', (req, res) => {
  // res.send('列出全部 Todo')
  res.render('index', { content: '列出全部 Todo' })
})

app.get('/new', (req, res) => {
  // res.send('新增 Todo 頁面')
  res.render('index', { content: '新增 Todo 頁面' })
})

app.get('/:id', (req, res) => {
  // res.send('顯示一筆 Todo')
  res.render('index', { content: '顯示一筆 Todo' })
})

app.post('/', (req, res) => {
  // res.send('新增一筆  Todo')
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function logger(req, res, next) {
  const timeStart = Date.now()
  const localTime = moment(timeStart).format('YYYY-MM-DD HH:mm:ss')
  const method = req.method
  const url = req.originalUrl

  res.on('finish', () => {
    const timeEnd = Date.now()
    const totalTime = (timeEnd - timeStart)
    console.log(`${localTime} | ${method} from ${url} | total time: ${totalTime}ms`)
  })
  next()
}