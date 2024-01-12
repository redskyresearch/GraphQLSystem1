const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type A {
        id: ID!
        name: String
    }

    type B {
        id: ID!
        topic: String
        aRef: A
    }

    type C {
        id: ID!
        subject: String
        message: String
        date: String
        bRef: B
    }

    type Query {
        allA: [A]
        allB: [B]
        allC: [C]
        a(id: ID!): A
        b(id: ID!): B
        c(id: ID!): C
        # Add other queries if necessary
    }

    type Mutation {
        addA(name: String!): A
        addB(topic: String!, aRef: ID!): B
        addC(subject: String!, message: String!, date: String!, bRef: ID!): C
    }
`;

module.exports = typeDefs;

//
// const typeDefs = gql`
//   type A {
//     id: ID!
//     name: String!
//   }
//
//   type Query {
//     getA: [A]
//     getUser(id: ID!): A
//   }
//
//   type Mutation {
//     createA(name: String!): A
//     deleteA(name: String!): [A]
//     updateA(id: ID!, edits: EditA!): A
//   }
//
//   input EditA {
//     name: String!
//   }
// `;
//
// module.exports = typeDefs;
