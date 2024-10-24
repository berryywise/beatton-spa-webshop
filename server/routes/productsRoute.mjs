import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.mjs";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.mjs";

export const router = Router();

// Get all products
router.get("/", getAllProducts);

// Get product by ID

router.get("/:id", getProductById);

// Create product

router.post("/", verifyTokenAndAdmin, createProduct);

// Update product

router.patch("/:id", verifyTokenAndAdmin, updateProduct);

// Delete product

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
