"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    email: {
        type: String,
        requierd: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    passwoard: {
        type: String,
        requierd: true,
        minlength: 5
    },
    tokens: [{
            access: {
                type: String,
                requierd: true
            },
            token: {
                type: String,
                requierd: true
            }
        }],
    created_date: {
        type: Date,
        default: Date.now
    }
});
exports.UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject, '_id', 'email');
};
exports.UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc123').toString();
    user.tokens = user.tokens.concat({ access, token });
    return user.save().then(() => {
        return token;
    });
};
exports.UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;
    try {
        decoded = jwt.verify(token, 'abc123');
    }
    catch (e) {
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};
//# sourceMappingURL=user-schema.js.map