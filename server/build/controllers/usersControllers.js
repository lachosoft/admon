"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var UsersControllers = /** @class */ (function () {
    function UsersControllers() {
    }
    UsersControllers.prototype.index = function (req, res) {
        database_1.default.query('DESCRIBE tbusers');
        res.json('Users');
    };
    return UsersControllers;
}());
exports.usersControllers = new UsersControllers();
exports.default = exports.usersControllers;
