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
var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');
//import {verifyAccessToken, extractAccessToken} from '../helpers'
exports.default = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        var fname = "htmls/" + (req.query.dataurl).replace(/\//g, '-');
        fs.readFile(fname, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                console.log("data from static file");
                res.send(data);
            }
            else {
                request(options, callback);
            }
        });
        var options = {
            url: 'https://www.bjs.com/' + req.query.dataurl,
            headers: {
                'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)'
            }
        };
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                // var info = JSON.parse(body);
                // console.log(info.stargazers_count + " Stars");
                // console.log(info.forks_count + " Forks");
            }
            var find = 'https://www.bjs.com';
            var re = new RegExp(find, 'g');
            body = body.replace(re, '');
            const $ = cheerio.load(body);
            fs.writeFile(fname, $('app-groupby-template div#slot1').html(), function (err) {
                if (err)
                    return console.log(err);
                console.log('Wrote Hello World in file helloworld.txt, just check it');
            });
            console.log("data from prerender");
            res.send($('app-groupby-template div#slot1').html());
        }
        //res.json(json)
    }
    catch (e) {
        res.sendStatus(401);
    }
});
//# sourceMappingURL=verify.js.map