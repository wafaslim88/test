const JWT = require("jsonwebtoken");
const User = require("../models/User.js");
require('dotenv').config();


// Middleware function to protect routes by verifying JWT token
exports.requireSignIn = async (req, res, next) => {
  try {
    // Verify the JWT token from the Authorization header
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    // If the token is valid, the 'decode' object will contain the decoded user data
    // You can then access the user data in subsequent middleware or request handlers

    // Add the decoded user data to the 'req.user' object for easy access in other parts of the application
    req.user = decode;

    // Move to the next middleware or request handler
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Unauthorized",
    });
  }
};


// Admin access
/*isAdmin middleware is responsible for checking if the user has an admin role (role = 1) and should only allow access to admin users. */
// Middleware to check if the user has admin access*/
exports.isAdmin = async (req, res, next) => {
  try {
    // Find the user by their ID from the decoded JWT token (set in requireSignIn middleware)
    const user = await User.findById(req.user._id);
    
    // Check if the user has admin role (role = 1)
    if (user.role !== 1) {
      // If the user does not have admin access, send a 401 Unauthorized response
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      // If the user has admin access, continue to the next middleware or route handler
      next();
    }
  } catch (error) {
    // If an error occurs, log the error and send a 401 Unauthorized response with the error details
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};

