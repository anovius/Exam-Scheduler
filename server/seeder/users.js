let faker = require("faker");
const moment = require("moment");
let mongoose = require("mongoose");
const User = require("../models/User");

async function seedUsers() {

  
  let student = new User(
    {
      fullName: "Student",
      userName: "student",
      email: "student@gmail.com",
      img: "uploads/no_user_img.png",
      role: 3,
      status: 1,
    }
  );
  student.setPassword("Asdf123");
  await student.save();

  let faculty = new User(
    {
      fullName: "Faculty",
      userName: "teacher",
      email: "teacher@gmail.com",
      img: "uploads/no_user_img.png",
      role: 2,
      status: 1,
    }
  );
  faculty.setPassword("Asdf123");
  await faculty.save();

  let admin = new User(
    {
      fullName: "Admin",
      userName: "admin",
      email: "admin@gmail.com",
      img: "uploads/no_user_img.png",
      role: 1,
      status: 1,
    }
  );
  admin.setPassword("Asdf123");
  await admin.save();

  console.log("Users seeded");
}

module.exports = seedUsers;
