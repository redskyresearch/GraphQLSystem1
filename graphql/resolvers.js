const A = require('../models/a');
const B = require('../models/b');
const C = require('../models/c');

const resolvers = {
    Query: {
        allA: async () => {
            // Logic to fetch all documents from A model
            return A.find({});
        },
        allB: async () => {
            // Logic to fetch all documents from A model
            return B.find({}).populate('aRef');
        },
        allC: async () => {
            // Logic to fetch all documents from A model
            return C.find({}).populate('bRef');
        },
        // Add other query resolvers
    },
    Mutation: {
        addA: async (_, {name}) => {
            const a = new A({name});
            return a.save();
            // Add other mutation logic
        },
        addB: async (_, {topic, aRef}) => {
            // Validate or fetch the referenced A document if necessary
            const aExists = await A.findById(aRef);
            if (!aExists) {
                throw new Error('Referenced document in A not found');
            }

            const b = new B({topic, aRef});
            // return b.save();
            const savedB = await b.save();

            // Populate aRef to get the full A document
            const populatedB = await B.findById(savedB.id).populate('aRef');

            // Serialize the ID fields
            return {
                id: populatedB.id.toString(),
                topic: populatedB.topic,
                aRef: {
                    id: populatedB.aRef.id.toString(),
                    name: populatedB.aRef.name
                }
            };
        },
        addC: async (_, {subject, message, date, bRef}) => {
            // Validate or fetch the referenced B document if necessary
            const bExists = await B.findById(bRef);
            if (!bExists) {
                throw new Error('Referenced document in B not found');
            }

            const c = new C({subject, message, date, bRef});
            // return c.save();
            const savedC = await c.save();
            const populatedC = await C.findById(savedC.id).populate('bRef');
            // Serialize the ID fields
            return {
                id: populatedC.id.toString(),
                subject: populatedC.subject,
                message: populatedC.message,
                date: populatedC.date,
                bRef: {
                    id: populatedC.bRef.id.toString(),
                    topic: populatedC.bRef.topic
                }
            };
        },
        // Add other mutation resolvers
    },
    // Add resolvers for custom types if needed
};

module.exports = resolvers;
