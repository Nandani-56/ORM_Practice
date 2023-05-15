const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const select_master_route = require("./routes/select_master_route");
app.use("/", select_master_route);

const form_route = require("./routes/form_route");
app.use("/", form_route);

// const swaggerDefinition = {
//   openapi: "3.0.0",
//   info: {
//     title:
//       "API for performing CRUD operation on select master and option master",
//   },
//   servers: [
//     // {
//     //   url: "http://localhost:8082/",
//     // },
//   ],
//   // components: {
//   //   securitySchemes: {
//   //     bearerAuth: {
//   //       type: "http",
//   //       scheme: "bearer",
//   //       bearerFormat: "JWT",
//   //     },
//   //   },
//   // },
//   // security: [
//   //   {
//   //     bearerAuth: [],
//   //   },
//   // ],
// };

// const options = {
//   swaggerDefinition,
//   apis: ["./swaggerDoc/*.js"],
// };

// const specs = swaggerJsdoc(options);
// app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
