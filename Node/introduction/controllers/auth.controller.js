const user = require('../models/user');
const User = require('../models/user');
const mongoose = require('mongoose');

const signupController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            message: 'email and password are required',
        });
    }

    const newUser = new User({
        email,
        password,
    });
    const existingUser = await user.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            message: 'user already exists',
        })
    }
    await newUser.save();

    res.status(201).json({
        message: 'user created',
        email: newUser.email,
    });
};

const loginController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            message: 'email and password are required',
        });
    }

    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(404).json({
            message: 'user not found',
        });
    }

    res.status(200).json({
        message: 'user logged in',
        email: user.email,
    });
};

module.exports = {
    signupController,
    loginController,
};
