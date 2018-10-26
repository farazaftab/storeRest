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
//import {verifyAccessToken, extractAccessToken} from '../helpers'
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        // const accessToken = extractAccessToken(req)
        //await verifyAccessToken(accessToken)
        res.sendStatus(200);
    }
    catch (e) {
        res.sendStatus(401);
    }
});
//# sourceMappingURL=verify.js.map