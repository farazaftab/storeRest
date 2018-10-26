"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./modules/mainApp/routes"));
const routes_2 = __importDefault(require("./modules/sideApp/routes"));
const router = express_1.Router();
router.use('/app1', routes_1.default);
router.use('/app2', routes_2.default);
router.all('*', (req, res) => res.sendStatus(404));
exports.default = router;
//# sourceMappingURL=routes.js.map