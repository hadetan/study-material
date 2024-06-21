const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Okay',
    });
});

router.get('/all', (req, res) => {
    res.json({
        status: 'success',
    });
});

module.exports = router;
