import { Rooms } from "../models/Rooms";
import { Room } from "../types/rooms";

async function createRooms(req:any, res:any) {
    try{
        const room: Room = req.body;
        const roomCreated = await Rooms.create(room);
        return res.json(roomCreated);
    }catch(err:any) {
        return res.status(err.code).json({error:err.message})
    }
}

async function getAllRooms(req:any, res:any) {
    try{
        const result = await Rooms.findAll();
        return res.json(result);
    }catch(err:any){
        return res.status(err.code).json({error: err.message});
    }

}

async function roomID(req:any, res:any) {
    try{
        const room_id = req.params.id;

        const userExist = await Rooms.findByPk(room_id);

        if(!userExist) {
            return res.status(404).json({error: 'Esse usuário não existe'})
        }else{

        const user = await Rooms.findByPk(room_id, {
        include: { association: 'room_user_owner' }
    });

        return res.status(200).json(user)
        }
    }catch(err:any) {
        return res.status(err.code).json({error: err.message})
    }

    }

export { createRooms, getAllRooms, roomID }