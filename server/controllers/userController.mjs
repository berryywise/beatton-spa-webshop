import { User } from "../models/userModel.mjs";
import bcrypt from "bcrypt";

// Get user by ID

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json("User ID is invalid");

    const user = await User.findById(id);

    if (user.rowCount === 0) return res.status(404).json("User ID not found");

    res.json(user.rows[0]);
  } catch (error) {
    res.status(500).json("Failed to retrieve user");
  }
};

export const updateUserById = async (req, res) => {
  try {
    let { username, email, password, is_admin } = req.body;

    if (typeof is_admin !== "boolean") return res.status(400).json("is_admin must be a boolean value")

    if (password) {
      password = await bcrypt.hash(password, 10)
    }

    const id = req.params.id;

    if (!id) return res.status(400).json("User ID is invalid");

    const result = await User.findByIdAndUpdate(username, email, password, is_admin, id);

    if (result.rowCount === 0) return res.status(404).json("User ID not found");

    res.json("User has been updated");
  } catch (error) {
    res.status(500).json("Failed to update user");
  }
};

// Delete user by ID

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json("User ID is invalid");

    const user = await User.findByIdAndDelete(id);

    if (user.rowCount === 0)
      return res.status(404).json("User ID is not found");

    res.json("User deleted successfully");
  } catch (error) {
    res.status(500).json("Failed to delete user");
  }
};
