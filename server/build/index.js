"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default(); //almacenamos express en app
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
    };
    Server.prototype.routes = function () {
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'));
        {
            console.log('Server on port', this.app.get('port'));
        }
    };
    return Server;
}());
var server = new Server();
server.start();
