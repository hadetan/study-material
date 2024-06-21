const signupController = async (req, res) => {
    console.log('signupController called');
    res.json({
        message: 'success',
    });
};

const loginController = async (req, res) => {
    console.log('loginController called');
    res.json({
        message: 'success',
    });
};

module.exports = {
    signupController,
    loginController,
};

app.get('/user/:id', (req, res, next) => {
    console.log(`ID: ${req.params.id}`);
    next();
});
