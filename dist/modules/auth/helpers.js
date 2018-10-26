"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ms_1 = __importDefault(require("ms"));
exports.hashPassword = (password) => __awaiter(this, void 0, void 0, function* () { return bcryptjs_1.default.hash(password, 10); });
exports.validatePassword = (password, hash) => __awaiter(this, void 0, void 0, function* () {
    const isCorrect = yield bcryptjs_1.default.compare(password, hash);
    if (!isCorrect) {
        throw new Error('INCORRECT_PASSWORD');
    }
});
exports.generateAccessToken = (user) => __awaiter(this, void 0, void 0, function* () {
    const tokenData = {
        user: {
            _id: user._id,
            username: user.username,
        },
        refresh: user.password,
        expires: +new Date() + ms_1.default('1 day'),
    };
    return yield jsonwebtoken_1.default.sign(tokenData, process.env.JWT_SECRET);
});
exports.verifyAccessToken = (accessToken) => __awaiter(this, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const tokenData = yield jsonwebtoken_1.default.verify(accessToken, process.env.JWT_SECRET);
        if (tokenData.expires < +new Date()) {
            throw new Error('EXPIRED_ACCESS_TOKEN');
        }
    }
    catch (e) {
        throw e;
    }
});
exports.extractAccessToken = (req) => typeof req.headers.authorization === 'string'
    ? req.headers.authorization.split('Bearer ')[1]
    : '';
//# sourceMappingURL=helpers.js.map