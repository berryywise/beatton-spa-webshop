import { Router } from "express";
import {
  deleteUserById,
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
} from "../controllers/userController.mjs";
import { verifyToken } from "../middlewares/auth.mjs";


export const router = Router();

// Get all users & user by ID

router.get("/", verifyToken, getUsers);

router.get("/:id", getUserById);

// Create user

router.post("/register", registerUser);

// Login user

router.post("/login", loginUser);

// Update user

router.patch("/:id", updateUserById);

// Delete user

router.delete("/:id", deleteUserById);
