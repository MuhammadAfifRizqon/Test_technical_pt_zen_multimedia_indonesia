import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";
import { verifyAdmin,verifyUser } from "../utilities/validasi";



const router = new Router()

router.get("/", indexCtrl.Product_categoriesCtrl.findAll)
router.get("/:id", indexCtrl.Product_categoriesCtrl.findOne)
router.post("/", verifyAdmin,indexCtrl.Product_categoriesCtrl.create)
router.put("/:id", verifyAdmin,indexCtrl.Product_categoriesCtrl.update)
router.delete("/:id", verifyAdmin,indexCtrl.Product_categoriesCtrl.deleted)


export default router