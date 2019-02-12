"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersControllers = /** @class */ (function () {
    function UsersControllers() {
    }
    UsersControllers.prototype.index = function (req, res) {
        res.send('Users');
    };
    return UsersControllers;
}());
exports.usersControllers = new UsersControllers();
exports.default = exports.usersControllers;
