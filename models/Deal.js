const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Tên giao dịch
    value: { type: Number, required: true }, // Giá trị giao dịch
    relatedContact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" }, // Liên hệ liên quan
    relatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Công ty liên quan
    stage: { type: String, required: true }, // Giai đoạn (ví dụ: "new", "in-progress", "closed")
    closingDate: { type: Date }, // Ngày đóng giao dịch
    notes: { type: String }, // Ghi chú
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Chủ sở hữu deal
  },
  { timestamps: true } // Tự động thêm createdAt và updatedAt
);

module.exports = mongoose.model("Deal", DealSchema);
