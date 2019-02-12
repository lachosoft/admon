"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersControllers_1 = require("../controllers/usersControllers");
var UsersRoute = /** @class */ (function () {
    function UsersRoute() {
        this.router = express_1.Router();
        this.config();
    }
    UsersRoute.prototype.config = function () {
        this.router.get('/', usersControllers_1.usersControllers.index);
    };
    return UsersRoute;
}());
var usersRoute = new UsersRoute();
exports.default = usersRoute.router;
