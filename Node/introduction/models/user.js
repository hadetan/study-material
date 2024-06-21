const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
