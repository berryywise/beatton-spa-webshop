import { Router } from "express";
import {
  deleteUserById,
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
} from "../controllers/userController.mjs";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.mjs";


export const router = Router();

// Get all users & user by ID

router.get("/", verifyTokenAndAdmin, getUsers);

router.get("/:id", verifyTokenAndAdmin, getUserById);

// Create user

router.post("/register", registerUser);

// Login user

router.post("/login", loginUser);

// Update user

router.patch("/:id", verifyTokenAndAdmin, updateUserById);

// Delete user

router.delete("/:id", verifyTokenAndAdmin, deleteUserById);
