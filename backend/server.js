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

// Middleware to parse JSON requests
app.use(express.json());

// ✅ CORS configuration: Allow all origins
const corsOptions = {
  origin: '*', // Allow all origins
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD", // Allowed methods
  credentials: false, // Set to true if you need to allow credentials (cookies, headers, etc.)
};

app.use(cors(corsOptions));

// Routes for your app
app.use("/api/auth", authRoute); // Auth routes
app.use("/api/form", contactRoute); // Contact form routes
app.use("/api/data", serviceRoute); // Service-related routes
app.use("/api/admin", adminRoute); // Admin routes

// Error handling middleware (for catching errors)
app.use(errorMiddleware);

// Database connection and server startup
const PORT = 5001;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

