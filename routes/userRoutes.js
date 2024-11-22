const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Các API quản lý user
router.get("/", protect, admin, getUsers); // Chỉ admin có thể xem danh sách người dùng
router.get("/:id", protect, admin, getUserById); // Chỉ admin có thể xem chi tiết người dùng
router.put("/:id", protect, admin, updateUser); // Chỉ admin có thể cập nhật người dùng
router.delete("/:id", protect, admin, deleteUser); // Chỉ admin có thể xóa người dùng

module.exports = router;
