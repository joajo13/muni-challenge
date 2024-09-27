import { Router } from "express";
import { create, getAll, getById, updateComment, updateStatus } from "./controller.js";
import { upload } from "../../config/multer.js";
import { verifyToken } from "../../middleware.js";
import ROLES from "../../constants/ROLES.js";

const router = Router();

router.get("", verifyToken(ROLES.ADMIN), getAll);
router.get("/:id", verifyToken(ROLES.ADMIN), getById);
router.post("/create", upload.single('archivo'), create);
router.put("/update/:id/comment", verifyToken(ROLES.ADMIN), updateComment);
router.put("/update/:id/status", verifyToken(ROLES.ADMIN), updateStatus);

export default router;