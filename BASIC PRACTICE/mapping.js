const { Sequelize, DataTypes, Model } = require("sequelize");
const express = require('express');
const app = express();

// connection
const sequelize = new Sequelize('orm_practice','root','root',{
    dialect:'mysql',
    host:'localhost'
})

//authenticate connection
sequelize.authenticate().then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("Connection Failed");
})


// invoice model
const Invoice = sequelize.define("invoice",{
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})  


const Invoice1 = sequelize.define("invoiceee",{
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


// user model
const User = sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull : false,
    }
})


// one to one relationship
User.hasOne(Invoice);
// User.hasOne(Invoice1);
// Invoice.belongsTo(User);


// add model to db
sequelize.sync().then(()=>{
    console.log("Tables created successfully!");
}).catch(()=>{
    console.log("Err table");
})


// insert multiple records into user table
User.bulkCreate([
    {username:"ABC"},
    {username:"XYZ"},
]).then(()=>{
    console.log("Inserted");
})


// By default, Sequelize will add the attributes createdAt and updatedAt to your model so you will be able to know when the database entry went into the db and when it was updated last.
// insert multiple records into invoice table
Invoice.bulkCreate([
    {amount:1000,userId:1},
    {amount:3000,userId:2},
]).then(()=>{
    console.log("2Inserted");
}).catch((err)=>{
    console.log("dfs",err);
})

Invoice1.bulkCreate([
    {amount:1000,userId:1},
    {amount:3000,userId:2},
]).then(()=>{
    console.log("2Inserted");
}).catch((err)=>{
    console.log("dfs",err);
})


//By default, the include option will cause Sequelize to generate an SQL query with the LEFT OUTER JOIN clause. To change the JOIN clause from LEFT OUTER JOIN to INNER JOIN, you need to add the required: true option to the include option.
User.findAll({
    attributes:["username","id"],
    include:[{model:Invoice,attributes:["amount","userId"],required:true},{model:Invoice1,attributes:["amount","userId"],required:true}],
    order:["id"],
    raw:true,
}).then((res)=>{
    console.log("asd",res);
})

