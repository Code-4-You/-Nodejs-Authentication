// Define user schema and model
const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
// const User = mongoose.model('User', UserSchema);
// module.exports = User;

// Define user schema and model

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return this.password === value;
            },
            message: 'Password Do not match'
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;