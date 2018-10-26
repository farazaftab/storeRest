"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res) => {
    try {
        const json = {
            "status": "succcess",
            "response": "In progress"
        };
        res.json(json);
    }
    catch (e) {
        res.sendStatus(400);
    }
};
//# sourceMappingURL=register.js.map