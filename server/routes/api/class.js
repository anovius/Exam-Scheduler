var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");
var Class = mongoose.model("Class");

router.param("slug", (req, res, next, slug) => {
    Class.findOne({ slug: slug })
        .then((result) => {
        if (!result) {
            next(new BadRequestResponse("Class not found"));
        } else {
            req.class = result;
            next();
        }
        })
        .catch(next);
});

router.post("/", auth.required, auth.admin, (req, res, next) => {
    let newClass = new Class(req.body);
    newClass.save((err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse({message: "Class created successfully"}));
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

    Class.paginate(query, options, (err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse(result));
    });
});

router.put("/status/:status/:slug", auth.required, auth.admin, (req, res, next) => {
    req.class.status = req.params.status;
    req.class.save((err, result) => {
        if(err || !result){
            next(new BadRequestResponse(err));
        }
        next(new OkResponse({message: "Class status updated successfully"}));
    });
});

module.exports = router;