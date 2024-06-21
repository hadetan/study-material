const dotenv = require('dotenv');
const express = require('express');
const v1 = require('./routes/v1/');
const dbConnect = require('./dbConnect');

dotenv.config({
    path: './.env',
});

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toTimeString());
    next();
});

app.use('/v1', v1);

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
