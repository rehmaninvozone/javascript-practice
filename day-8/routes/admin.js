const express = require("express");

const adminController = require("../controllers/admin");
const request = require("../request/post");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", request.post, adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", request.post, adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
