export interface User{
    idUsr?: number,
    nick?: string,
	nombres?: string,
	appaterno?: string,
	apmaterno?: string,
	email?: string,
    deleted?: number,
    deletedon?: Date,
    deletedby?: number,
    createdon?: Date,
	createdby?: number
}