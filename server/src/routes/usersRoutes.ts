import { Router } from 'express'

class UsersRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req,res) => res.send('USERS'));
    }

}

const usersRoute = new UsersRoute();
export default usersRoute.router;