const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const  validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validators");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;