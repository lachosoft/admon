import { Request, Response }from 'express';

class IndexControllers {
    public index (req: Request, res: Response){
        res.send()
    }
}

export const indexControllers = new IndexControllers();