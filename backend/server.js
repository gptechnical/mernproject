require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");

app.use(express.json());
// const corsOptions = {
//   origin: (origin, callback) => {
//     const allowedOrigins = [
//       "http://localhost:5173/",
//       "http://localhost:4173/",
//       "https://www.codegptech.shop/",
//     ];
//     const isAllowed = allowedOrigins.includes(origin);
//     callback(null, isAllowed ? origin : false );
//   },
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials: true,
// };

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://www.codegptech.shop/",
];

// Use the cors middleware with specific options
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        // callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "GET", "PUT", "PATCH", "REQUEST", "DELETE"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  return res.status(200).send("Welcometo CodeGPT");
});


// app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//lets define admin route

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5001;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
 });
});