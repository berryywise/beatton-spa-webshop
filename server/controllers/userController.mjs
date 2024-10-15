import { User } from "../models/userModel.mjs";

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

// Delete user by ID

export const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).json("User ID is invalid");

        const user = await User.findByIdAndDelete(id);

        if(user.rowCount === 0) return res.status(404).json("User ID is not found")

        res.json("User deleted successfully")

    } catch (error) {
        res.status(500).json("Failed to delete user")
    }
}
