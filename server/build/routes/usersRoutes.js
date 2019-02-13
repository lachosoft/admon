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
        this.router.get('/', usersControllers_1.usersControllers.list);
        this.router.get('/:id', usersControllers_1.usersControllers.getOne);
        this.router.post('/', usersControllers_1.usersControllers.create);
        this.router.put('/:id', usersControllers_1.usersControllers.update);
        this.router.delete('/:id', usersControllers_1.usersControllers.delete);
    };
    return UsersRoute;
}());
var usersRoute = new UsersRoute();
exports.default = usersRoute.router;
