const express = require("express");
const cors = require("cors");
const app = express();


app.set('view engine','ejs');

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentData = require('./routers/studentRoute');
app.use('/',studentData);

const oneToOne = require('./routers/oneToOneRoute');
app.use('/',oneToOne);

const oneToMany = require('./routers/oneToManyRoute');
app.use('/',oneToMany);

const manyToMany = require('./routers/manyToManyRoute');
app.use('/',manyToMany);

const polymorphic = require('./routers/polymorphicRoute');
app.use('/',polymorphic);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
