"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {upsertUser} from '../../../db/repositories/userRepository'
//import {UpsertUser} from '../../../db/models/User'
exports.default = (req, res) => {
    // const {username, password}: UpsertUser = req.body
    try {
        // await upsertUser({username, password})
        res.sendStatus(201);
    }
    catch (e) {
        res.sendStatus(400);
    }
};
//# sourceMappingURL=register.js.map