const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ServerApiVersion } = require('mongodb');

dotenv.config({
    path: './.env',
});

module.exports = () => {
    (async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                },
            });
            console.log('Connected to DB');
        } catch (error) {
            console.error('ERROR:', error);
            throw error;
        }
    })();
};
