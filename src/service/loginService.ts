import { Logins } from "../models/Logins";
import { Users } from "../models/users";
import { Login } from "../types/login";

const table = 'logins';
const db = require('../database/config');

async function createLogin(req:any, res:any) {
    try{
        const login: Login = req.body;
        const result = await Logins.create(login);
        return res.json(result);
    }catch(err:any){
        return res.status(err.code).json({err:err.message})
    }

   
}

async function getLogins(req:any, res:any){
    try{
        const result = await Logins.findAll();
        return res.status(200).json(result);
    }catch(err:any) {
        return res.status(err.code).json({err:err.message})
    }
}

async function getUserLoginById(req:any, res:any) {
    try{
        const user_id = req.params.id;

        const userExist = await Users.findByPk(user_id);

        if(!userExist) {
            return res.status(404).json({error: 'Esse usuário não existe'})
        }else{

        const user = await Users.findByPk(user_id, {
        include: { association: 'login_user_owner' }
    });

        return res.status(200).json(user)
        }
    }catch(err:any) {
        return res.status(err.code).json({error: err.message})
    }

}

export { createLogin, getLogins, getUserLoginById };