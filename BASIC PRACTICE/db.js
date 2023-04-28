// ORM PRACTICE

const { Sequelize, DataTypes, Op } = require("sequelize");
const express = require("express");
const mysql = require("mysql2");
const { raw } = require("body-parser");
const { title } = require("process");
const app = express();

// connection
const sequelize = new Sequelize("orm_practice", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// authenticate() is used to connect with the database and tests whether the given credentials are correct!
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("err");
  });

// create a table
// sequelize.define() creates a new model, which represents a table in a database. It will create a table called book!!
const Books = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // allowNull shows that the model columm cannot be null
    validate:{
      isLowercase: true,  
    }
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  published_date: {
    type: DataTypes.DATEONLY,
  },
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

//sync() method is used to add table to the database!  In database the table name will be saved in plural form.. book model name will be saved as books for table name
sequelize
  .sync()
  .then(() => {
    console.log("1,Table created successsfully!");
  })
  .catch((err) => {
    console.log("err", err);
  });

// create() method is used to insert a new single row into the table
Books.create({
  title: "abc",
  author: "Ankur Warikoo",
  published_date: "2023-03-08",
  subject_id: "4",
})
  .then(() => {
    console.log("2,Inserted");
  })
  .catch((err) => {
    console.log("2Err", err);
  });

// bulkCreate() is used to insert multiple row into the table
// Books.bulkCreate(
//   [
//     {
//       title: "2 States",
//       author: "Chetan Bhagat",
//       published_date: "23-03-08",
//       subject_id: "1",
//     },
//     {
//       title: "ABC",
//       author: "XYZ",
//       published_date: "23-03-08",
//       subject_id: "3",
//     },
//   ],
//   {
//     ignoreDuplicates: true, //you can ignore duplicate primary keys with ignoreDuplicates:true
//   }
// )
//   .then(() => {
//     console.log("3,2 rows inserted");
//   })
//   .catch((err) => {
//     console.log("3Err", err);
//   });

// findAll() is used to select all the records from the table
Books.findAll()
  .then((res) => {
    console.log("4,All Selected");
  })
  .catch((err) => {
    console.log("Err", err);
  });

// findOne() is used to select the specific record from the table using the where condition
Books.findOne({
  where: {
    subject_id: "1",
  },
})
  .then(() => {
    console.log("5,findone");
  })
  .catch((err) => {
    console.log("err");
  });

// destroy() is used to delete a row from table
Books.destroy({
  where: {
    subject_id: "4", // ["1","2","3"]  to delete multiple records
  },
})
  .then(() => {
    console.log("6,Record deleted successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

//update() is used to update the row.  Op.or is used for OR in where condition.. We can use Op for operator such as Op.and Op.like Op.lt Op.gt Op.not
Books.update(
  {
    subject_id: "8",
  },
  {
    where: {
      subject_id: {
        [Op.or]: ["2", "3"],
      },
    },
  }
)
  .then(() => {
    console.log("7Updated");
  })
  .catch((err) => {
    console.log("Err", err);
  });

// To make the upsert() method perform an UPDATE statement, you need to specify the primary key in the method argument, otherwise it will perform the INSERT operation
Books.upsert({
  subject_id: "1",
  title: "Hello",
  author: "ABC",
})
  .then(() => {
    console.log("Upsert");
  })
  .catch((err) => {
    console.log("err", err);
  });

// drop() is used to drop the existing table
// Books.drop().then(()=>{
//     console.log("7,Table Dropped Successfully!");
// }).catch((err)=>{
//     console.log("Err",err);
// })

// aggregate function can be perfomed by using sequelize.fn()
// count
Books.findAll({
  attributes: [
    [sequelize.fn("count", sequelize.col("subject_id")), "subject_id"],
  ],
  raw: true, //to make the result more readable
})
  .then((res) => {
    console.log("count subject_id", res);
  })
  .catch((err) => {
    console.log("count err", err);
  });

// min
Books.findAll({
  attributes: [
    [sequelize.fn("min", sequelize.col("subject_id")), "subject_id"],
  ],
  raw: true, //to make the result more readable
})
  .then((res) => {
    console.log("min subject_id", res);
  })
  .catch(() => {
    console.log("err");
  });

// group by and order and limit
Books.findAll({
  attributes: ["title"],
  group: "title",
  order: ["title"],
  raw: true,
  limit: 2,
})
  .then((res) => {
    console.log("Group", res);
  })
  .catch((err) => {
    console.log("groupErr", err);
  });
