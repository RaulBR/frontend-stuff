"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const _ = require("lodash");
const user_schema_1 = require("../models/user-schema");
const User = mongoose.model('Users', user_schema_1.UserSchema);
class UserService {
    addUser(req, res) {
        let body = _.pick(req.body, ['email', 'passwoard']);
        let user = new User(body);
        //modelmethod
        //User.findByToken
        //instance method
        // user.generateAuthToken
        user.save().then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user);
        }).catch((e) => {
            res.status(400).sendStatus(e);
        });
    }
    getUser(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUserByID(req, res) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.contactId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
    login(req, res) {
    }
    findByToken(req, res) {
        let token = req.header('x-auth');
        User.findByToken(token).then((user) => {
            if (!user) {
                return Promise.reject();
            }
            res.send(user);
        }).catch((e) => {
            res.status(401).send();
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map