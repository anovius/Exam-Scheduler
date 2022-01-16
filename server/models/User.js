const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const mongoosePaginate = require("mongoose-paginate-v2");
const secret = require('../config').secret;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      default: null,
    },

    userName: {
      type: String,
      unique: true,
      required: true,
    },

    img: { type: String, default: "uploads/no_user_img.png" },

    otp: { type: String, default: null },
    otpExpires: { type: Date, default: null },
    isOtpVerified: { type: Boolean, default: false },
    resetPasswordToken: { type: String, default: null },

    role: {
      type: Number,
      default: 3, // default 2- Student
      enum: [
        1, // 1: Admin
        2, // 2: Faculty
        3, //Student
      ],
    },

    status: {
      type: Number,
      default: 1,
      enum: [
        0, //Active
        1, //Blocked
        2, //Delete
      ],
    },

    hash: String,
    salt: String,
  },
  { timestamps: true },
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });
UserSchema.plugin(mongoosePaginate);

UserSchema.methods.validPassword = function (password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.setOTP = function () {
  // this.otp = otpGenerator.generate(4, {
  // 	lowerCaseAlphabets: false,
  // 	upperCaseAlphabets: false,
  // 	// alphabets: false,
  // 	// upperCase: false,
  // 	specialChars: false,
  // });
  // this.otpExpires = Date.now() + 3600000; // 1 hour
};

UserSchema.methods.generatePasswordRestToken = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
};

UserSchema.methods.generateJWT = function () {
  // let today = new Date();
  // let exp = new Date(today);
  // exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      // exp: parseInt(exp.getTime() / 1000),
    },
    secret,
    { expiresIn: "60d" },
  );
};

UserSchema.methods.toJSON = function () {
  return {
      email: this.email,
      fullName: this.fullName,
      userName: this.userName,
      img: this.img,
      role: this.role,
      status: this.status
  };
};

UserSchema.methods.toAuthJSON = function () {
  return {
    token: this.generateJWT(),
    email: this.email,
    fullName: this.email,
    userName: this.userName,
    img: this.img,
    role: this.role,
    status: this.status
  }
};

module.exports = mongoose.model("User", UserSchema);
