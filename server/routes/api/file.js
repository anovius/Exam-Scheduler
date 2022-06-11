var router = require("express").Router();
var mongoose = require("mongoose");
let auth = require("../auth");
let {
  OkResponse,
  BadRequestResponse,
  UnauthorizedResponse,
} = require("express-http-response");
var multer = require("../../utilities/multer");
var cpUpload = multer.fields([
    { name: "file", maxCount: 1 },
]);

var Class = mongoose.model("Class");
var User = mongoose.model("User");
var Subject = mongoose.model("Subject");


router.post('/', cpUpload, auth.required, auth.admin, async (req, res, next) => {
    
    next(new OkResponse({message: "File uploaded successfully"}));
})

module.exports = router;