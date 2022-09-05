import  express  from "express";
import { createFunction, deleteUser, getAllUsers, updateUser, userID } from "../service/usersService";
import { User } from "../types/user";
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', userID);
router.post('/users', createFunction);

router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;