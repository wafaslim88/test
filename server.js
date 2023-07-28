const express=require("express");
const morgan = require('morgan');
const connectDB = require("./config/connectDB");
require('dotenv').config();
const authRoutes = require("./routes/authRoute");
const cors = require('cors');
const categoryRoutes= require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");



//database config
connectDB();
//rest object
const app=express()
//middelewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>")
})
//run server
const port = process.env.PORT||8080
app.listen(port,err=>
    err?console.log("error"):console.log(`Server is running on port ${port}`))

  