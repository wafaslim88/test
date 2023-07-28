const express = require('express');
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware.js');
const formidable = require('express-formidable');

const router = express.Router();
const {
  

    createProductController, getProductController,getSingleProductController,productPhotoController, 
    deleteProductController, updateProductController, productFiltersController, productCountController,
     productListController, searchProductController,realtedProductController, productCategoryController,
     braintreeTokenController,brainTreePaymentController
  } = require('../controllers/productController.js');
  

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController,
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//update product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

//filter product
// Filter products based on category, price range, and sex
router.post("/product-filters", productFiltersController);


//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


module.exports = router;