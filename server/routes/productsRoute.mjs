import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.mjs";
import { verifyToken } from "../middlewares/auth.mjs";

export const router = Router();

// Get all products
router.get("/", getAllProducts);

// Get product by ID

router.get("/:id", getProductById);

// Create product

router.post("/", createProduct);

// Update product

router.patch("/:id", updateProduct);

// Delete product

router.delete("/:id", deleteProduct);
