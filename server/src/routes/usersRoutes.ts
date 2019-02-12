import { Router } from 'express'

import { usersControllers } from '../controllers/usersControllers';

class UsersRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usersControllers.index);
    }

}

const usersRoute = new UsersRoute();
export default usersRoute.router;