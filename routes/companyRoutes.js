const express = require("express");
const {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createCompany);
router.get("/", protect, getAllCompanies);
router.put("/:id", protect, admin, updateCompany);
router.delete("/:id", protect, admin, deleteCompany);

module.exports = router;
