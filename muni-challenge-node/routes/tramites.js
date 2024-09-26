import { Router } from "express";
import { createTramite } from "../controllers/tramites.js";
import { upload } from "../config/multer.js";

const router = Router();

router.post("/create", upload.single('archivo'), createTramite);

export default router;