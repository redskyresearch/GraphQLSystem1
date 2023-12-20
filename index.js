const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');


async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    mongoose.connect('mongodb://127.0.0.1:27017/local').then(() => console.log("Mongo DB connected")).catch(err => console.log(err));

    app.listen(4000, () => console.log('Server is running on http://localhost:4000'));
}

startServer().then(r => {});
