import { Request, Response }from 'express';

import db from '../database'; 

class UsersControllers {
    public async list (req: Request, res: Response){
        const Users = await db.query('select idUsr as Id, nick, nombres, appaterno, apmaterno, email from tbusers where deleted=0');
        res.json(Users);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const Users = await db.query('select idUsr, nick, nombres, appaterno, apmaterno, email from tbusers where deleted=0 and  idUsr = ?',[id]);
        if(Users.length>0){
            return res.json(Users[0]);
        }
        res.status(404).json({text: "The user don't exists"});
    }

    public async create(req:Request, res: Response): Promise<void>{
        await db.query('insert into tbusers set?', req.body);
        console.log(req.body);
        res.json({text:'User saved!!'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('update tbusers set ? where idUsr = ?',[req.body,id]);
        res.json({text: "The User has updated."})
    }

    public async delete(req:Request, res: Response):Promise<void>{
        const {id} = req.params;   
        const Users = db.query("delete from tbusers where idUsr = ?",[id]);
        res.json({text: "The User has deleted"});
    }

    
}

export const usersControllers = new UsersControllers();
export default usersControllers;