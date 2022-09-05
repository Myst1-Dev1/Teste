import  express  from "express";
import { createRooms, getAllRooms, roomID } from "../service/roomsService";
const router = express.Router();


router.get('/rooms', getAllRooms);
router.get('/rooms/:id', roomID)
router.post('/rooms', createRooms);

module.exports = router;