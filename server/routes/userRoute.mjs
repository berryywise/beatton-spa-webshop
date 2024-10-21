import { Router } from "express";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.mjs";

export const router = Router();

// Get user

router.get("/:id", getUserById);

// Create user

router.post("/register");

// Login user

router.post("/login");

// Update user

router.patch("/:id", updateUserById);

// Delete user

router.delete("/:id", deleteUserById);
