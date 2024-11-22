const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    companyName: { type: String }, // Tên công ty liên quan (tùy chọn)
    address: { type: String }, // Địa chỉ
    jobTitle: { type: String }, // Chức danh
    notes: { type: String }, // Ghi chú
  },
  { timestamps: true } // Tự động thêm createdAt và updatedAt
);

module.exports = mongoose.model("Contact", ContactSchema);
