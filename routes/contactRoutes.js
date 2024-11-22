const express = require("express");
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createContact); // Người dùng đã xác thực có thể tạo
router.get("/", protect, getAllContacts); // Bất kỳ người dùng đã xác thực nào cũng có thể xem
router.get("/:id", protect, getContactById);
router.put("/:id", protect, updateContact); // Chỉ người dùng đã xác thực có thể cập nhật
router.delete("/:id", protect, deleteContact); // Chỉ người dùng đã xác thực có thể xóa

module.exports = router;
