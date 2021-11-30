import express from 'express'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use((_: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.listen(3000, () => null)

// 一覧取得
app.get('/', (_: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello world!',
  })
})
