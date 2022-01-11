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
      role: 3,
      status: 0,
    }
  );
  student.setPassword("Asdf123");
  await student.save();

  let faculty = new User(
    {
      fullName: "Faculty",
      userName: "teacher",
      email: "faculty@gmail.com",
      role: 2,
      status: 0,
    }
  );
  faculty.setPassword("Asdf123");
  await faculty.save();

  let admin = new User(
    {
      fullName: "Admin",
      userName: "admin",
      email: "admin@gmail.com",
      role: 1,
      status: 0,
    }
  );
  admin.setPassword("Asdf123");
  await admin.save();

  console.log("Users seeded");
}

module.exports = seedUsers;
