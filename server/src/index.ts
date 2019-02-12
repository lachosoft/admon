import express, {Application} from "express";
import { config } from "bluebird";

class Server{

    public app: Application; //defincioon de variable para express

    constructor(){
        this.app = express(); //almacenamos express en app
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
    }

    routes():void{

    }

    start(): void{
        this.app.listen(this.app.get('port')){
            console.log('Server on port', this.app.get('port'));
        }
    }
}

const server =new Server();
server.start();