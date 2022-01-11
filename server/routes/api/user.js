let mongoose = require("mongoose");
let router = require("express").Router();
let passport = require("passport");
let User = mongoose.model("User");
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

router.post("/users/login", (req, res, next) => {
    passport.authenticate(
      "local",
      { session: false },
        (err, user, info) => {
        if (err) {
          next(new BadRequestResponse(err.message));
        }
        if (user && user.status === 3) {
          next(new UnauthorizedResponse("Your email is not approved", 402));
        } else if (user && user.status === 2) {
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

router.get("/user/context", auth.required, auth.user, (req, res, next) => {
    let user = req.user;
    next(new OkResponse({ user: user.toAuthJSON() }));
});

module.exports = router;