import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";
import { verifyAdmin,verifyUser } from "../utilities/validasi";

const router = new Router()

router.get("/", indexCtrl.varianCtrl.findAll)
router.get("/:id",indexCtrl.varianCtrl.findOne)
router.post("/", verifyAdmin,indexCtrl.varianCtrl.create)
router.put("/:id", verifyAdmin,indexCtrl.varianCtrl.update)
router.delete("/:id", verifyAdmin,indexCtrl.varianCtrl.deleted)


export default router