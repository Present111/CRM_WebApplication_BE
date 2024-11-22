const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTicket); // Người dùng đã xác thực có thể tạo ticket
router.get("/", protect, getAllTickets); // Bất kỳ người dùng đã xác thực nào cũng có thể xem
router.get("/:id", protect, getTicketById);
router.put("/:id", protect, updateTicket); // Chỉ người dùng đã xác thực có thể cập nhật
router.delete("/:id", protect, deleteTicket); // Chỉ người dùng đã xác thực có thể xóa

module.exports = router;
