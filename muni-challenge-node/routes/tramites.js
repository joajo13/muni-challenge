import { Router } from "express";
import { createTramite, getAll } from "../controllers/tramites.js";
import { upload } from "../config/multer.js";

const router = Router();

router.post("/create", upload.single('archivo'), createTramite);
router.get("", getAll);

export default router;