// Resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.
const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
  },

  //   needed to be able to use the mutations in typeDefs
  Mutation: {
    // add user resolver
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      return user;
    },
  },
};

module.exports = resolvers;
