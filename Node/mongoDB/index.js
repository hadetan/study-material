const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const User = require('./src/models/User.schema');

const mongo_URI =
    'mongodb+srv://hadetan:itsaquibalifucker@cluster0.xkjcom8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

(async () => {
    try {
        await mongoose.connect(mongo_URI, {
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

const user = User({
    email: 'aki@gmail.com',
    password: '1234',
});

user.save().then(() => {
    console.log('user saved');
});
