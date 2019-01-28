"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("../routes"));
exports.default = () => {
    const app = express_1.default();
    app.use(helmet_1.default());
    app.use(cors_1.default());
    app.use(body_parser_1.default.json());
    //await connectDb()
    app.use('/', routes_1.default);
    return app;
};
//# sourceMappingURL=createApp.js.map