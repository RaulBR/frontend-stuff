"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const user_schema_1 = require("../models/user-schema");
const User = mongoose.model('Users', user_schema_1.UserSchema);
class AuthService {
    authenticate(req, res, next) {
        let token = req.header('x-auth');
        User.findByToken(token).then((user) => {
            if (!user) {
                return Promise.reject();
            }
            req.user = user;
            req.token = token;
            next();
        }).catch((e) => {
            res.status(401).send();
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map