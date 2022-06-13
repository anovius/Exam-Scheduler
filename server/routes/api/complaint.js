var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");
var Complaint = mongoose.model("Complaint");

router.param("slug", (req, res, next, slug) => {
    Complaint.findOne({ slug: slug })
        .then((result) => {
        if (!result) {
            next(new BadRequestResponse("Complaint not found"));
        } else {
            req.complaint = result;
            next();
        }
        })
        .catch(next);
});

router.post("/", auth.required, auth.user, (req, res, next) => {
    let complaint = new Complaint(req.body);
    complaint.by = req.user._id;
    complaint.save((err, result) => {
        if (err) {
            next(new BadRequestResponse(err.message));
        } else {
            next(new OkResponse(result));
        }

    });
})

router.get("/get/all", auth.required, auth.admin, (req, res, next) => {
    Complaint.find({}, (err, result) => {
        if (err) {
            next(new BadRequestResponse(err.message));
        } else {
            next(new OkResponse(result));
        }
    });
})

router.get("/get/my", auth.required, auth.user, (req, res, next) => {
    Complaint.find({by: req.user._id}, (err, result) => {
        if (err) {
            next(new BadRequestResponse(err.message));
        } else {
            next(new OkResponse(result));
        }
    });
})

module.exports = router;