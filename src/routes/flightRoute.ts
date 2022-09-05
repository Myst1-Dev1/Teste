import  express  from "express";
import { createFlights, flightID, getAllFlights } from "../service/flightsService";
const router = express.Router();


router.get('/flights', getAllFlights);
router.get('/flights/:id', flightID);
router.post('/flights', createFlights);

module.exports = router;