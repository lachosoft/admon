"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersControllers = /** @class */ (function () {
    function UsersControllers() {
    }
    UsersControllers.prototype.list = function (req, res) {
        res.json('All Users');
    };
    UsersControllers.prototype.getOne = function (req, res) {
        res.json({ text: 'Get a User / Id: ' + req.params.id });
    };
    UsersControllers.prototype.create = function (req, res) {
        res.json({ text: 'Create a User' });
    };
    UsersControllers.prototype.update = function (req, res) {
        res.json({ text: 'Update a User / Id: ' + req.params.id });
    };
    UsersControllers.prototype.delete = function (req, res) {
        res.json({ text: 'Delete a User / Id: ' + req.params.id });
    };
    return UsersControllers;
}());
exports.usersControllers = new UsersControllers();
exports.default = exports.usersControllers;
