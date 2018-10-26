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
const postRepository_1 = require("../../../db/repositories/postRepository");
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const post = yield postRepository_1.upsertPost(payload);
        res.status(201).json(post);
    }
    catch (e) {
        res.status(400).json({ error: e.name });
    }
});
//# sourceMappingURL=createPost.js.map