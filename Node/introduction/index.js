const dotenv = require('dotenv');
const express = require('express');
const v1 = require('./routes/v1/');

dotenv.config({
    path: './.env',
});

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toTimeString());
    next();
});

app.use('/v1', v1);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
