let mongoose = require("mongoose");
let router = require("express").Router();
let passport = require("passport");
let User = mongoose.model("User");
let Room = mongoose.model("Room");
let Slot = mongoose.model("Slot");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");
const {
  sendEmailVerificationOTP,
  sendEmailVerificationSuccess,
  sendEmailOTP,
  sendEmailForgotPasswordSuccess,
} = require("../../utilities/emailService");

router.post("/login", (req, res, next) => {
    passport.authenticate(
      "local",
      { session: false },
        (err, user, info) => {
        if (err) {
          next(new BadRequestResponse(err.message));
        }
        if (user && user.status === 2) {
          next(
            new UnauthorizedResponse(
              "Your Account is Blocked!, Contact to Support please",
              403,
            ),
          );
        }
        if (user) {
          next(new OkResponse({ user: user.toAuthJSON() }));
        } else {
          next(new UnauthorizedResponse());
        }
      },
    )(req, res, next);
});

router.get("/context", auth.required, auth.user, (req, res, next) => {
    let user = req.user;
    next(new OkResponse({ user: user.toAuthJSON() }));
});

router.post("/add/student", auth.required, auth.admin, (req, res, next) => {
    let user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      userName: req.body.userName,
    });
    user.setPassword(req.body.userName);
    user.role = 3;
    user.save((err, result) => {
      console.log(err);
        if (err || !result) {
            next(new BadRequestResponse(err));
        }
        next(new OkResponse({ message: "User created successfully" }));
    });
});

router.get("/get/students", auth.required, auth.admin, (req, res, next) => {
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    sort: { createdAt: -1 },
  }

  let query = {
    role: 3,
    status: 1,
  };

  User.find(query, (err, result) => {
    if (err) {
      next(new BadRequestResponse(err));
    }
    next(new OkResponse(result));
  });
});

router.post("/add/teacher", auth.required, auth.admin, (req, res, next) => {
  let user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    userName: req.body.userName,
  });
  user.setPassword(req.body.userName);
  user.role = 2;
  user.save((err, result) => {
      if (err || !result) {
          next(new BadRequestResponse(err));
      }
      next(new OkResponse({ message: "User created successfully" }));
  });
});

router.get("/get/teachers", auth.required, auth.admin, (req, res, next) => {
const options = {
  page: req.query.page || 1,
  limit: req.query.limit || 10,
  sort: { createdAt: -1 },
}

let query = {
  role: 2,
  status: 1,
};

User.find(query, (err, result) => {
  if (err) {
    next(new BadRequestResponse(err));
  }
  next(new OkResponse(result));
});
});

router.get('/others/rooms', auth.required, auth.admin, (req, res, next) => {
  Room.find({status: 1}, (err, data) => {
    next (new OkResponse(data));
  })
})

router.post('/add/slot', auth.required, auth.admin, (req, res, next) => {
  let slot = new Slot(req.body);
  slot.save((err, data) => {
    next(new OkResponse(data))
  });
})

router.get('/others/slots', auth.required, auth.admin, (req, res, next) => {
  Slot.find({status: 1}, (err, data) => {
    next (new OkResponse(data));
  })
})

router.post('/settings', auth.required, auth.user, (req, res, next) => {
  if (req.user.validPassword(req.body.currentPassword)) {
    req.user.setPassword(req.body.newPassword);
    req.user.save((err, data) => {
      next(new OkResponse("Password changed successfully"));
    });
  }
  else {
    next(new BadRequestResponse("Current Password is incorrect"));
  }
})

module.exports = router;