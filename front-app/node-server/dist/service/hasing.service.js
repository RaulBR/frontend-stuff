"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SHA265 = require("crypto-js");
const jwt = require("jsonwebtoken");
class HashingService {
    hash(string) {
        return SHA265(string).toString();
    }
    token(data, secret) {
        return jwt.sign(data, secret);
    }
    verifyToken(token, secret) {
        return jwt.verify(token, secret);
    }
}
exports.HashingService = HashingService;
//# sourceMappingURL=hasing.service.js.map