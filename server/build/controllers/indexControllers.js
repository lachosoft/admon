"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexControllers = /** @class */ (function () {
    function IndexControllers() {
    }
    IndexControllers.prototype.index = function (req, res) {
        res.send('Hello');
    };
    return IndexControllers;
}());
exports.indexControllers = new IndexControllers();
