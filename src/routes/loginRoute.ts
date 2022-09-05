import  express  from "express";
import { createLogin, getLogins, getUserLoginById } from "../service/loginService";
const router = express.Router();

router.get('/logins', getLogins);
router.get('/logins/:id', getUserLoginById)
router.post('/logins', createLogin);

module.exports = router;