import { Router } from "express";
import { deleteUserById, getUserById } from "../controllers/userController.mjs";

export const router = Router();

// Get user

router.get("/:id", getUserById)

// Create user

router.post("/register")

// Login user

router.post("/login")

// Update user

router.patch("/:id")

// Delete user

router.delete("/:id", deleteUserById)

