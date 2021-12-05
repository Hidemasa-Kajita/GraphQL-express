import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import mongoose from 'mongoose'

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

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  await mongoose.connect('mongodb://localhost:27017/post_db', {
    user: 'app_user',
    pass: 'p@ssw0rd',
  })

  app.listen(4000, () => null)
}

startServer()
