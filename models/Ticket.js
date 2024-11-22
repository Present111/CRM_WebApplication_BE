const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Tên phiếu hỗ trợ
    description: { type: String, required: true }, // Mô tả vấn đề
    status: {
      type: String,
      required: true,
      enum: ["new", "in-progress", "resolved"],
    }, // Trạng thái
    relatedContact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" }, // Liên hệ liên quan
    relatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Công ty liên quan
    priority: { type: String, enum: ["low", "medium", "high"] }, // Mức độ ưu tiên
    assignedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Người dùng được chỉ định
    category: { type: String }, // Danh mục
  },
  { timestamps: true } // Tự động thêm createdAt và updatedAt
);

module.exports = mongoose.model("Ticket", TicketSchema);
