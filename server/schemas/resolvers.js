// Resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.
const { User, Book } = require("../models");

const resolvers = {
  Query: {
    // logic here remains the same
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async () => {},
  },
};

module.exports = resolvers;
