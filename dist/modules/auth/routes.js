"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = __importDefault(require("./handlers/register"));
const login_1 = __importDefault(require("./handlers/login"));
const verify_1 = __importDefault(require("./handlers/verify"));
const refresh_1 = __importDefault(require("./handlers/refresh"));
const router = express_1.Router();
router.post('/register', register_1.default);
router.post('/login', login_1.default);
router.get('/verify', verify_1.default);
router.post('/refresh', refresh_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map