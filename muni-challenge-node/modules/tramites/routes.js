import { Router } from "express";
import { create, getAll, getById, updateComment, updateStatus } from "./controller.js";
import { upload } from "../../config/multer.js";
import { verifyToken } from "../../middleware.js";

const router = Router();

router.get("", verifyToken, getAll);
router.get("/:id", verifyToken, getById);
router.post("/create", upload.single('archivo'), create);
router.put("/update/:id/comment", verifyToken, updateComment);
router.put("/update/:id/status", verifyToken, updateStatus);

export default router;