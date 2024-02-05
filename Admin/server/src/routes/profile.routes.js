import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/profile.controller.js";

const router = express.Router();

// Create a new user
router.post("/users", createUser);

// Get all users
router.get("/users", getUsers);

// Get a single user by ID
router.get("/users/:id", getUserById);

// Update a user by ID
router.put("/users/:id", updateUserById);

// Delete a user by ID
router.delete("/users/:id", deleteUserById);

export default router;
