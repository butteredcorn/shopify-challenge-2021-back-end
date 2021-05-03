import { gql, IResolvers, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql`

    type Rating {
        Source: String
        Value: Float
    }

    type MovieResponse {
        Title: String
        Year: Int
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
        Metascore: Int
        imdbRating: Float
        imdbVotes: String
        imdbID: String!
        Type: String
        DVD: String
        BoxOffice: String
        Production: String
        Website: String
        Response: Boolean
    }

    type Query {
        movieByTitle(title: String!) : MovieResponse 
    }
`

const resolvers: IResolvers = {
    Query: {
        movieByTitle(_, {title}, {dataSources}) {
            return dataSources.omdbAPI.withTitle(title)
        } 
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})