var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
var writeXlsxFile = require('write-excel-file/node')
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

router.get('/', auth.required, auth.user, (req, res, next) => {
  Schedule.find({}).sort({_id: -1}).limit(1).exec((err, schedule) => {
    if (err) {
      next(new BadRequestResponse(err));
    }
    next(new OkResponse(schedule[0]));
  })
})

router.get('/teacher', auth.required, auth.user, (req, res, next) => {
  Schedule.find({}).sort({_id: -1}).limit(1).exec((err, schedule) => {
    if (err) {
      next(new BadRequestResponse(err));
    }
    
    let filtered = schedule[0].subjects.filter(subject => {
      return subject.teacher === req.user.fullName;
    });

    schedule[0].subjects = filtered;

    next(new OkResponse(schedule[0]));
  })
})

router.get('/export', (req, res, next) => {
  Schedule.find({}).sort({_id: -1}).limit(1).exec(async (err, schedule) => {
    const schema = [
      {
          column: 'Subject',
          type: String,
          value: subject => subject.name
      },
      {
        column: 'Class',
        type: String,
        value: subject => subject.className
      },
      {
          column: 'Teacher',
          type: String,
          value: subject => subject.teacher
      },
      {
          column: 'Room',
          type: String,
          value: subject => subject.room
      },
      {
          column: 'Slot',
          type: String,
          value: subject => subject.slot
      },
      {
          column: 'Date',
          type: String,
          value: subject => subject.date.toString()
      }
    ];

    await writeXlsxFile(schedule[0].subjects, {
      schema,
      filePath: process.cwd() + '/server/public/downloads/Schedule.xlsx'
    })

    res.download(process.cwd() + '/server/public/downloads/Schedule.xlsx');
  })
});

router.post('/attendance', auth.required, auth.user, async (req, res, next) => {
  console.log(req.body);
  Schedule.find({}).sort({_id: -1}).limit(1).exec((err, schedule) => {
    if (err) {
      next(new BadRequestResponse(err));
    }

    schedule[0].subjects.forEach(subject => {
      if (subject.name === req.body.subject && subject.className === req.body.className && subject.teacher === req.user.fullName) {
        subject.attendance = req.body.attendance;
      }
    })

    schedule[0].save((err, schedule) => {
      next(new OkResponse("Attendance updated successfully"));
    })
  })
})

module.exports = router;