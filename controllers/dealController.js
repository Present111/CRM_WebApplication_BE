const Deal = require("../models/Deal");

// Tạo deal
exports.createDeal = async (req, res) => {
  try {
    const deal = await Deal.create(req.body);
    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lấy danh sách deal
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().populate(
      "relatedContact relatedCompany owner"
    );
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin deal theo ID
exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id).populate(
      "relatedContact relatedCompany owner"
    );
    if (!deal) return res.status(404).json({ error: "Deal not found" });
    res.status(200).json(deal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật deal
exports.updateDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!deal) return res.status(404).json({ error: "Deal not found" });
    res.status(200).json(deal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xóa deal
exports.deleteDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndDelete(req.params.id);
    if (!deal) return res.status(404).json({ error: "Deal not found" });
    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
