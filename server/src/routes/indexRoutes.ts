import { Router } from 'express'

class IndexRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req,res) => res.send('helo word'));
    }

}

const indexRoute = new IndexRoute();
export default indexRoute.router;