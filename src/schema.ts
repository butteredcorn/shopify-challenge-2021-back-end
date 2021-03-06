import { gql, IResolvers, makeExecutableSchema } from 'apollo-server'
/**
 * Note: Year can be 2014-2015 and Metascore can be 'N/A', thus Int will fail in those cases
 */
const typeDefs = gql`

    type Rating {
        Source: String
        Value: Float
    }

    type MovieResponse {
        Title: String
        Year: String
        Rated: String
        Released: String
        Runtime: String
        Genre: String
        Director: String
        Writer: String
        Actors: String
        Plot: String
        Language: String
        Country: String
        Awards: String,
        Poster: String
        Ratings: [Rating]
        Metascore: String
        imdbRating: String
        imdbVotes: String
        imdbID: String!
        Type: String
        DVD: String
        BoxOffice: String
        Production: String
        Website: String
        Response: String
    }

    type Result {
        Title: String
        Year: String
        imdbID: String!
        Type: String
        Poster: String
    }

    type SearchResponse {
        Search: [Result]
        totalResults: Int
        Response: String
    }

    type Query {
        movieByID(id: String!) : MovieResponse 
        searchByTitle(title: String!) : SearchResponse
    }
`

const resolvers: IResolvers = {
    Query: {
        movieByID(_, {id}, {dataSources}) {
            return dataSources.omdbAPI.withID(id)
        },
        searchByTitle(_, {title}, {dataSources}) {
            return dataSources.omdbAPI.searchWithTitle(title)
        }
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})