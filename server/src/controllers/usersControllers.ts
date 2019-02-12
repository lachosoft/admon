import { Request, Response }from 'express';

import db from '../database'; 

class UsersControllers {
    public list (req: Request, res: Response){
        res.json('All Users');
    }

    public getOne(req: Request, res: Response){
        res.json({text: 'Get a User / Id: '+ req.params.id})
    }

    public create(req:Request, res: Response){
        res.json({text:'Create a User'});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Update a User / Id: '+ req.params.id});
    }

    public delete(req:Request, res: Response){
        res.json({text: 'Delete a User / Id: '+ req.params.id});
    }
}

export const usersControllers = new UsersControllers();
export default usersControllers;