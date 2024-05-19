const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/insta', (req,res) => {
    const insta = {
        username: "aki",
        followers: 20
    };
    res.status(200).json({insta})
});

app.get('/twitter', (req,res) => {
    const twitter = {
        username: 'aki',
        followers: 30
    };
    res.status(200).json({twitter});
});

app.get('/facebook', (req, res) => {
    const facebook = {
        username: 'aki',
        followers: 100
    };
    res.status(200).json({facebook})
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
});