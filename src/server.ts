import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { dataSources } from './graphQLWrapper'

const server = new ApolloServer({ schema, dataSources })

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`Server running at ${url}`)
})