import  express  from "express";
import { createPackages, getAllPackages, getPackageById } from "../service/packageService";
const router = express.Router();


router.get('/packages', getAllPackages);
router.get('/packages/:id', getPackageById);
router.post('/packages', createPackages);

module.exports = router;