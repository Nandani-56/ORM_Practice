const express = require("express");
const route = express.Router();
const polymorphicManyToMany = require("../controllers/polymorphicManyToManyController");

// API to insert user
route.post('/user',polymorphicManyToMany.insertUser);

// API to insert post and comment
route.post('/insertpolymany',polymorphicManyToMany.insertData)

// API to read post comment
route.get('/postData',polymorphicManyToMany.seePost)

// API to read attachment data
route.get('/attachmentData',polymorphicManyToMany.readAttachment)

// route.delete('/deleteData/:id',polymorphicManyToMany.deleteData);
module.exports = route