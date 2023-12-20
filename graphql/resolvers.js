const A = require('../models/a');
const B = require('../models/b');
const C = require('../models/c');

const resolvers = {
    Query: {
        allA: async () => {
            // Logic to fetch all documents from A model
            return A.find({});
        },
        // Add other query resolvers
    },
    Mutation: {
        addA: async (_, { name }) => {
            const a = new A({ name });
            return a.save();
            // Add other mutation logic
        },
        // Add other mutation resolvers
    },
    // Add resolvers for custom types if needed
};

module.exports = resolvers;
