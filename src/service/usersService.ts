import { User } from "../types/user";
import { Users } from "../models/users";

const table = 'users';
const db = require('../database/config');


async function createFunction(req: any, res: any) {
    try{
        const user: User = req.body;
        const userCreated = await Users.create(user);
        return res.status(200).json(userCreated);
    }catch(err:any) {
        return res.status(err.code).json({error:err.message})
    }

};

async function getAllUsers(req: any,res: any) {
    try{
        const result = await Users.findAll();
        return res.status(200).json(result);
    }catch(err:any) {
        return res.status(err.code).json({error: err.message});
    }
};


async function updateUser(req: any, res: any){
   try{
    let corpo = req.body;
    let user_id = req.params.id;
    const result = await Users.update(corpo, {
        where: {
            id:user_id
        }
    });
    return res.status(200).json(result); 
   }catch(err:any){
    return res.status(err.code).json({error:err.message});
   }
}


async function deleteUser(req: any, res: any) {
    try{
        let user_id = req.params.id;
        const result = await Users.destroy({
        where: {
            id: user_id
        }
    });
    return res.status(200).json(result)
    }catch(err:any) {
        return res.status(err.code).json({error:err.message})
    }
    
}

async function userID(req:any, res:any) {
    // let user_id = req.params.id;

    // const result = await Users.findOne({
    //     where: {
    //         id: user_id
    //     }
    // });
    // return res.json(result);
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

export { createFunction, getAllUsers, updateUser, userID, deleteUser }