const express = require('express');
const router = express.Router();
const mainController= require("../controller/mainController.js");
const { middleware } = require('../middleWare/middleware.js');

router.post("/createAuthor",mainController.createAuthor);
router.post("/login",mainController.login);


router.post("/createBlogs",middleware,mainController.createBlog); 
router.get("/getBlog",middleware,mainController.getFilteredBlogs);
router.put("/updateBlog/:blogId",middleware,mainController.updateBlog);
router.delete("/deleteBlogById/:blogId",middleware,mainController.deleteBlog);
router.delete("/deleteByQueryParams",middleware, mainController.queryParamsDelete); /// all apis working fine

module.exports=router;