import { Router } from "express";
import { getProducts } from "../controllers/productsController.mjs";

export const router = Router();

router.get("/", getProducts)