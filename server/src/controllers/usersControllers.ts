import { Request, Response }from 'express';

class UsersControllers {
    public index (req: Request, res: Response){
        res.send('Users');
    }
}

export const usersControllers = new UsersControllers();
export default usersControllers;