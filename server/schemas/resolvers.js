// Resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.
const { User, Book } = require('../models')


const resolvers = {
  Query: {
    books: () => {
      return Book.find().sort({ title });
    },
  },
};

module.exports = resolvers;
