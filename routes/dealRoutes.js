const express = require("express");
const {
  createDeal,
  getAllDeals,
  getDealById,
  updateDeal,
  deleteDeal,
} = require("../controllers/dealController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createDeal); // Người dùng đã xác thực có thể tạo deal
router.get("/", protect, getAllDeals); // Bất kỳ người dùng đã xác thực nào cũng có thể xem
router.get("/:id", protect, getDealById);
router.put("/:id", protect, updateDeal); // Chỉ người dùng đã xác thực có thể cập nhật
router.delete("/:id", protect, deleteDeal); // Chỉ người dùng đã xác thực có thể xóa

module.exports = router;
