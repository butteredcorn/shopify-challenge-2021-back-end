import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { dataSources } from './graphQLWrapper'

const server = new ApolloServer({ schema, dataSources })

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`)
})

/**
 * Example of search query:
 * query {
 *   searchByTitle(title:"Iron Man") {
 *       Search {
 *         Title
 *         Year
 *         imdbID
 *         Poster
 *       }
 *       totalResults
 *       Response
 *     }
 *   }
 */