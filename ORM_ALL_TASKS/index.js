const express = require("express");
const cors = require("cors");
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.set("view engine", "ejs");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const studentData = require("./routers/studentRoute");
app.use("/", studentData);

const oneToOne = require("./routers/oneToOneRoute");
app.use("/", oneToOne);

const oneToMany = require("./routers/oneToManyRoute");
app.use("/", oneToMany);

const manyToMany = require("./routers/manyToManyRoute");
app.use("/", manyToMany);

const polymorphic = require("./routers/polymorphicRoute");
app.use("/", polymorphic);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API for performing CRUD operation on Different Table ",
  },
  servers: [
    {
      url: "http://localhost:8080/",
    },
  ],
  // components: {
  //   securitySchemes: {
  //     bearerAuth: {
  //       type: "http",
  //       scheme: "bearer",
  //       bearerFormat: "JWT",
  //     },
  //   },
  // },
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],
};

const options = {
  swaggerDefinition,
  apis: ["./swaggerDoc/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
