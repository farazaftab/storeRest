"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = new Logger({
    transports: [
        new winston_1.transports.Console({
            colorize: true,
            silent: process.env.NODE_ENV === 'test',
        }),
    ],
});
exports.httpLoggerMiddleware = (req, res, next) => {
    res.on('finish', () => {
        const message = [
            res.statusCode,
            req.method,
            req.originalUrl,
            JSON.stringify(req.body),
            JSON.stringify(req.rawHeaders),
            req.ip,
        ].join(' ');
        if (res.statusCode >= 400) {
            logger.error(`HTTP ERROR ${message}`);
        }
        else {
            logger.info(`HTTP OK ${message}`);
        }
    });
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map