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
//import {findUserByUsername} from '../../../db/repositories/userRepository'
//import {Credentials} from '../../auth/types'
//import {validatePassword, generateAccessToken} from '../helpers'
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //const {username, password}: Credentials = req.body
    try {
        // const user = await findUserByUsername(username)
        // await validatePassword(password, user.password)
        const json = {
        // jwt: await generateAccessToken(user),
        };
        res.status(200).json(json);
    }
    catch (e) {
        res.sendStatus(401);
    }
});
//# sourceMappingURL=login.js.map