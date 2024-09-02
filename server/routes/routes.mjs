import { Router } from "express";
import { testFunction } from "../controllers/testController.mjs";

const router = Router();

router.get("/test", testFunction)


export default router;