import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productsController.mjs";

export const router = Router();

// Get all products.
router.get("/products", getAllProducts)

// Get product by ID.

router.get("/products/:id", getProductById)

// Create product

router.post("/products", createProduct)

// Update product

router.patch("/products/:id", updateProduct)

// Delete product

router.delete("/products/:id", deleteProduct)