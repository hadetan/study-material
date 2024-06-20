const express = require('express');

const app = express();

app.use(express.json());

// Data will be coming from database
const user = [
    {
        name: 'Aquib',
        age: 23,
    },
    {
        name: 'User 2',
        age: 19,
    },
];

app.get('/user', (req, res) => {
    // res.send({
    //     name: 'Aquib',
    //     age: 23,
    // });
    res.status(200).json({
        success: true,
        message: 'users were found',
        user,
    });
});

app.post('/user', (req, res) => {
    console.log(req.body);
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
