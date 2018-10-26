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
    try {
        const { id } = req.params;
        const post = yield postRepository_1.findPostById(id);
        if (post) {
            res.json(post);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (e) {
        res.sendStatus(400);
    }
});
//# sourceMappingURL=getPost.js.map