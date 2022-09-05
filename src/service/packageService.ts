import { Packages } from "../models/Packages";
import { Package } from "../types/package";

const table = 'packages';
const db = require('../database/config');


async function createPackages(req:any, res:any) {
   try{
    const pack:Package = req.body;
    const packageCreated = await Packages.create(pack)
    return res.status(200).json(packageCreated);
   }catch(err:any) {
    return res.status(err.code).json({error:err.message})
   }
   

};

async function getAllPackages(req:any, res:any) {
    try{
        const result = await Packages.findAll({
            include: [{association:'room_user_owner' },
                      {association:'flight_user_owner'}]
        })
        return res.status(200).json(result);
    }catch(err:any) {
        return res.status(err.code).json({error: err.message});
    }

}

async function getPackageById(req:any, res:any) {
    try{
        const package_id = req.params.id;

        const userExist = await Packages.findByPk(package_id);

        if(!userExist) {
            return res.status(404).json({error: 'Esse usuário não existe'})
        }else{

        const user = await Packages.findByPk(package_id, {
            include: [{association:'room_user_owner' },
                      {association:'flight_user_owner'}]
    });

        return res.status(200).json(user)
        }
    }catch(err:any) {
        return res.status(err.code).json({error: err.message})
    }
};

export { createPackages ,getPackageById, getAllPackages }