const app = require('./app')
const createHttpError = require('http-errors')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./apollo/typeDefs')
const { resolvers } = require('./apollo/resolver')

async function main() {
  try {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
    
    app.use((req, res, next) => next(createHttpError(404)))
    app.use((err, req, res) => {
      res.status(err.status || 500)
      res.render('error')
    })
    
    app.listen(3000, () => {
      console.log("Server is running on port", 3000)
    })
  } catch (error) {
    console.error("Unable to start application", error)
  }
}

main()
