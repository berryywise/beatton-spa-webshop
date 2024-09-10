import { Router } from "express";
import { getProducts} from "../controllers/productsController.mjs";

export const router = Router();

// Get all products.
router.get("/", getProducts)