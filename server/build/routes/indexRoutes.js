"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexControllers_1 = require("../controllers/indexControllers");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoute.prototype.config = function () {
        this.router.get('/', indexControllers_1.indexControllers.index);
    };
    return IndexRoute;
}());
var indexRoute = new IndexRoute();
exports.default = indexRoute.router;
