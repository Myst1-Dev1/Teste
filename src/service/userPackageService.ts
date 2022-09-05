import { UserPackages } from "../models/UserPackages";
import { UserPackage } from "../types/userPackage";

const table = 'users_packages';
const db = require('../database/config');

async function createUserPackage(req:any, res:any) {
    try{
        const userpackage: UserPackage = req.body;
        const userPackageCreated = await UserPackages.create(userpackage)
        return res.status(200).json(userPackageCreated);
    }catch(err:any) {
        return res.status(err.code).json({err:err.message});
    }
}

async function getUserPackage(req:any, res:any) {
   try{
    const result = await UserPackages.findAll({
        include: [{association:'user_package_user_owner' },
                  {association:'user_package_package_owner'}]
    })
    return res.status(200).json(result);
   }catch(err:any){
    return res.status(err.code).json({err:err.message})
   }

}

async function getUserPackageById(req:any, res:any) {
    try{
        const user_id = req.params.id;

        const userExist = await UserPackages.findByPk(user_id);

        if(!userExist) {
            return res.status(404).json({error: 'Esse usuário não existe'})
        }else{

        const user = await UserPackages.findByPk(user_id, {
            include: [{association:'user_package_user_owner' },
                      {association:'user_package_package_owner'}]
    });

        return res.status(200).json(user)
        }
    }catch(err:any) {
        return res.status(err.code).json({error: err.message})
    }
}

export { getUserPackage, createUserPackage, getUserPackageById }