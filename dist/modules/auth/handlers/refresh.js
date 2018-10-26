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
//import jwt from 'jsonwebtoken'
//import {findUserById} from '../../../db/repositories/userRepository'
//import {generateAccessToken, extractAccessToken} from '../helpers'
//import {AccessToken} from '../types'
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        // @ts-ignore
        //const accessToken: AccessToken = await jwt.decode(extractAccessToken(req))
        //const user = await findUserById(accessToken.user._id)
        if (accessToken.refresh !== user.password) {
            res.sendStatus(401);
            return;
        }
        const json = {
        // jwt: await generateAccessToken(user),
        };
        res.status(201).json(json);
    }
    catch (e) {
        res.sendStatus(401);
    }
});
//# sourceMappingURL=refresh.js.map