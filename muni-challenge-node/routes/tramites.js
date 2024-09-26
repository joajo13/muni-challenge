import { Router } from "express";
import { createTramite } from "../controllers/tramites.js";
import multer from "multer";
import { storage } from "../config/multer.js";
const upload = multer({ storage: storage });

const router = Router();

router.post("/create", upload.single('archivo'), createTramite);

export default router;