import { httpStatusCode } from "../constants/httpsStatusCode.mjs";
import { User } from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const getUsers = async (req, res) => {
  try {
    const result = await User.findAllUsers();

    if (result.rowCount === 0)
      return res.status(httpStatusCode.NOT_FOUND).json("No users found");

    res.json(result.rows);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to retrieve users");
  }
};

// Get user by ID

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID is invalid");

    const user = await User.findById(id);

    if (user.rowCount === 0)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID not found");

    res.json(user.rows[0]);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to retrieve user");
  }
};

// Create new user

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json("All user fields are required");

    let unusedName = await User.findByUsername(username);
    let unusedEmail = await User.findByEmail(email);

    if (unusedName.rowCount !== 0)
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json("Username is already in use");
    if (unusedEmail.rowCount !== 0)
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json("Email is already in use");

    let hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.createUser(username, email, hashedPassword);

    res.json(`Succesfully registered new user: ${username}`);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to register user");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json("All user fields are required");

    const existingUser = await User.findByEmail(email);

    if (existingUser.rowCount === 0)
      return res
        .status(httpStatusCode.NOT_FOUND)
        .json("User with email not found");

    const hashedPassword = existingUser.rows[0].password;

    const validPassword = await bcrypt.compare(password, hashedPassword);

    if (!validPassword)
      return res.status(httpStatusCode.BAD_REQUEST).json("Invalid Credentials");

    const { id, is_admin } = existingUser.rows[0];

    const token = jwt.sign({ email, id, is_admin }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3600000,
    });

    res.json("User Authenticated");
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to login user");
    console.log(error);
  }
};

// Update user by ID

export const updateUserById = async (req, res) => {
  try {
    let { username, email, password, is_admin } = req.body;

    if (typeof is_admin !== "boolean")
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json("is_admin must be a boolean value");

    if (password) {
      password = await bcrypt.hash(password, 10);
    }

    const id = req.params.id;

    if (!id)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID is invalid");

    const result = await User.findByIdAndUpdate(
      username,
      email,
      password,
      is_admin,
      id
    );

    if (result.rowCount === 0)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID not found");

    res.json("User has been updated");
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to update user");
  }
};

// Delete user by ID

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID is invalid");

    const user = await User.findByIdAndDelete(id);

    if (user.rowCount === 0)
      return res.status(httpStatusCode.NOT_FOUND).json("User ID is not found");

    res.json("User deleted successfully");
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to delete user");
  }
};
