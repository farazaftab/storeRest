"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const createApp_1 = __importDefault(require("./app/createApp"));
const logger_1 = __importDefault(require("./app/logger"));
dotenv_1.load();
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const app = yield createApp_1.default();
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            logger_1.default.info(`App running on port ${port}...`);
        });
    }
    catch (e) {
        logger_1.default.error(e.toString());
        process.exit(1);
    }
});
start();
//# sourceMappingURL=index.js.map