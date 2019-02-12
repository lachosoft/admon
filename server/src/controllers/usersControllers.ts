import { Request, Response }from 'express';

import pool from '../database'; 

class UsersControllers {
    public index (req: Request, res: Response){
        pool.query('DESCRIBE tbusers');
        res.json('Users');
    }
}

export const usersControllers = new UsersControllers();
export default usersControllers;