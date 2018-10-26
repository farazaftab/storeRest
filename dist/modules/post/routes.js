"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_1 = __importDefault(require("./handlers/createPost"));
const getPost_1 = __importDefault(require("./handlers/getPost"));
const middlewares_1 = require("../auth/middlewares");
const router = express_1.Router();
router.post('/', [middlewares_1.authenticate], createPost_1.default);
router.get('/:id', getPost_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map