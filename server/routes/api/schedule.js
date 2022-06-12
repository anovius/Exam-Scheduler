var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");
var Schedule = mongoose.model("Schedule");

router.post('/', auth.required, auth.admin, (req, res, next) => {
    let schedule = new Schedule(req.body);
    schedule.save((err, schedule) => {
        console.log(err);
        next(new OkResponse("Schedule created successfully"));
    });
});

module.exports = router;