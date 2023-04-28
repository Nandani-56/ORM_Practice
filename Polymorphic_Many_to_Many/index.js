const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const polymorphicManyToMany = require('./routes/polymorphicManyToManyRoute');
app.use('/',polymorphicManyToMany);




const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
