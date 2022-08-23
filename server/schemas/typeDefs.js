// typeDefs are literally defining every piece of data that the client can expect to work with through a query or mutation.
// Think of this as not only defining the API endpoint, but also defining the exact data and parameters that are tied to that endpoint.
// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs, in=between the backticks
const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    books: [Book]
  }
`;

// export the typeDefs
module.exports = typeDefs;
