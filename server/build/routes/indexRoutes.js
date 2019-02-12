"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoute.prototype.config = function () {
        this.router.get('/', function (req, res) { return res.send('helo word'); });
    };
    return IndexRoute;
}());
var indexRoute = new IndexRoute();
exports.default = indexRoute.router;
