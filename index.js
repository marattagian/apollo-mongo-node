const app = require('./app')
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
    
    app.listen(3000, () => {
      console.log("Server is running on port", 3000)
    })
  } catch (error) {
    console.error("Unable to start application", error)
  }
}

main()
