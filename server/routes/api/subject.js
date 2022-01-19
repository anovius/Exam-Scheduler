var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");

var Subject = mongoose.model("Subject");

router.param("slug", (req, res, next, slug) => {
    Subject.findOne({ slug: slug })
        .then((result) => {
        if (!result) {
            next(new BadRequestResponse("Subject not found"));
        } else {
            req.subject = result;
            next();
        }
        })
        .catch(next);
});

router.post("/", auth.required, auth.admin, (req, res, next) => {
    let subject = new Subject(req.body);
    subject.save((err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse({message: "Subject created successfully"}));
    })
})

router.get("/get/all", auth.required, auth.admin, (req, res, next) => {
    const options = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        sort: {createdAt: -1}
    }

    let query = {
        status: 1
    };

    Subject.paginate(query, options, (err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse(result));
    });
});

router.put("/status/:status/:slug", auth.required, auth.admin, (req, res, next) => {
    req.subject.status = req.params.status;
    req.subject.save((err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse({message: "Subject status updated successfully"}));
    });
});

module.exports = router;