const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt  = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
      },
    password: {
      type: String,
    require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
});

    // comparePassword
    userSchema.methods.comparePassword = async function (password) {
      return bcrypt.compare(password, this.password);
    };

// secure the password with the bcrypt
userSchema.pre("save", async function () {
    const user = this;
    console.log("actual data ", this);
  
    if (!user.isModified) {
      return next();
    }
  
    try {
      const saltRound = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, saltRound);
      user.password = hashedPassword;
    } catch (error) {
      return next(error);
    }
  });

  //? Generate JSON Web Token

userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };



//define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;