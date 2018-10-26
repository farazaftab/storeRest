"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = () => new Promise((resolve, reject) => {
    mongoose_1.default.Promise = global.Promise;
    mongoose_1.default.connect(process.env.DB);
    mongoose_1.default.connection.on('open', resolve);
    mongoose_1.default.connection.on('error', reject);
});
//# sourceMappingURL=connectDb.js.map