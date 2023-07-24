const bcrypt = require('bcrypt');
//const express=require("express");

/*export const hashPassword = async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
*/


exports.hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

exports.comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

/*module.exports = {
  hashPassword,
  comparePassword
};*/
