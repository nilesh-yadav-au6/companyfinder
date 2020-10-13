const express = require("express")
const router = express.Router()
const { fetchCompany, addCompany,getCompanies } = require("../controllers/companyController")

router.post("/search/company" , fetchCompany)
router.post("/add/company" , addCompany)
router.get("/getCompanies" , getCompanies)

module.exports = router