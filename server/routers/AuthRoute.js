import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.post("/registrasi", indexCtrl.AuthUserCtrl.regUsers);
router.post("/login", indexCtrl.AuthUserCtrl.login);

export default router;