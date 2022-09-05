import  express  from "express";
import { createUserPackage, getUserPackage, getUserPackageById } from "../service/userPackageService";
const router = express.Router();


router.get('/userPackage', getUserPackage);
router.post('/userPackage', createUserPackage);
router.get('/userPackage/:id', getUserPackageById)

module.exports = router;