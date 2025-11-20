import { Router } from "express";
import { genarateContent } from "../controllers/ai.controller";

const router = Router();
router.post("/generate", genarateContent)

export default router;