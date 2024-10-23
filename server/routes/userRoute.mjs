import { Router } from "express";
import {
  deleteUserById,
  getUserById,
  getUsers,
  registerUser,
  updateUserById,
} from "../controllers/userController.mjs";

export const router = Router();

// Get all users & user by ID

router.get("/", getUsers)

router.get("/:id", getUserById);

// Create user

router.post("/register", registerUser);

// Login user

router.post("/login");

// Update user

router.patch("/:id", updateUserById);

// Delete user

router.delete("/:id", deleteUserById);
