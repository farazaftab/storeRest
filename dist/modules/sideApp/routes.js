"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import createPost from './handlers/createPost'
const getPost_1 = __importDefault(require("./handlers/getPost"));
//import {authenticate} from '../auth/middlewares'
const router = express_1.Router();
//router.post('/', [authenticate], createPost)
router.get('/:id', getPost_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map