import { Router } from 'express'

import { usersControllers } from '../controllers/usersControllers';

class UsersRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usersControllers.list);
        this.router.get('/', usersControllers.getOne);
        this.router.post('/', usersControllers.create);
        this.router.put('/:id',usersControllers.update);
        this.router.delete('/:id',usersControllers.delete);
    }

}

const usersRoute = new UsersRoute();
export default usersRoute.router;