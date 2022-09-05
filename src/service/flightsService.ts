import { Flights } from "../models/Flights";
import { Flight } from "../types/flight";

async function createFlights(req:any, res:any){
    try{
        const flight: Flight = req.body;
        const flightCreated = await Flights.create(flight);
        return res.status(200).json(flightCreated); 
    }catch(err:any) {
        return res.status(err.code).json({error:err.message})
    }

}

async function getAllFlights(req:any, res:any) {
    try{
        const result = await Flights.findAll();
        return res.json(result);
    }catch(err:any){
        return res.status(err.code).json({err: err.message})
    }
}

async function flightID(req:any, res:any) {
    try{
        const flight_id = req.params.id;

        const userExist = await Flights.findByPk(flight_id);

        if(!userExist) {
            return res.status(404).json({error: 'Esse usuário não existe'})
        }else{

        const user = await Flights.findByPk(flight_id, {
        include: { association: 'flight_user_owner' }
    });

        return res.status(200).json(user)
        }
    }catch(err:any) {
        return res.status(err.code).json({error: err.message})
    }
}

export { createFlights, getAllFlights, flightID }