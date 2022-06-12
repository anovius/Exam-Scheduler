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

router.get('/', auth.required, auth.admin, (req, res, next) => {
  //get last 1 schedule
  Schedule.find({}).sort({_id: -1}).limit(1).exec((err, schedule) => {
    if (err) {
      next(new BadRequestResponse(err));
    }
    next(new OkResponse(schedule[0]));
  })
})

module.exports = router;