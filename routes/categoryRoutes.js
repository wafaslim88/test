const express=require("express");
// Using require to import isAdmin and requireSignIn from authMiddleware.js
const { isAdmin, requireSignIn } = require("./../middlewares/authMiddleware.js");
const {createCategoryController,
    updateCategoryController,
    categoryController,
    singleCategoryController,deleteCategoryCOntroller} = require("./../controllers/categoryController.js");



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
    updateCategoryController, 
  );
  //getALl category
router.get("/get-category", categoryController);
//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );
  module.exports = router;