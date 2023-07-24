const express=require("express");
// Using require to import isAdmin and requireSignIn from authMiddleware.js
const { isAdmin, requireSignIn } = require("./../middlewares/authMiddleware.js");
const {
    createCategoryController} = require("./../controllers/categoryController.js");



const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
module.exports =router;
//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );