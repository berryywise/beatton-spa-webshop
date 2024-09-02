import { Router } from "express";
import { testFunction } from "../controllers/testController.mjs";

export const router = Router();

router.get("/", testFunction)