"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
exports.authenticate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const accessToken = helpers_1.extractAccessToken(req);
        yield helpers_1.verifyAccessToken(accessToken);
        next();
    }
    catch (e) {
        res.status(401).json({ error: 'Unauthorized' });
    }
});
//# sourceMappingURL=middlewares.js.map