import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";
import uploadDownload from "../../Middleware/uploadDownload";
const router= Router()

router.get('/',indexCtrl.productCtrl.findAll)
router.get('/:id',indexCtrl.productCtrl.findOne)
router.post('/',uploadDownload.uploadFiles,indexCtrl.productCtrl.create)
router.put('/:id',uploadDownload.uploadFiles,indexCtrl.productCtrl.update)
router.get('/file/:filename',uploadDownload.showFile)
router.delete('/:id',indexCtrl.productCtrl.deleted)


export default router