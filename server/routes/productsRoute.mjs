import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/productsController.mjs";

export const router = Router();

// Get all products.
router.get("/products", getAllProducts)

// Get product by ID.

router.get("/products/:id", getProductById)