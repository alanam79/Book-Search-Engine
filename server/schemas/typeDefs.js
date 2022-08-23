// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs, in=between the backticks
const typeDefs = gql`
type Query {
    helloWorld: String
}
`;

// export the typeDefs
module.exports = typeDefs;
