var router = require("express").Router();
var mongoose = require("mongoose");
var readXlsxFile = require('read-excel-file/node');
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
    let filePath = req.files.file[0].path;
    let data = [];
    Promise.all([
        new Promise((resolve, reject) => {
            if(req.body.type === 'subjects'){
                readXlsxFile(filePath).then((rows) => {
                    for (let i = 1; i < rows.length; i++) {
                        data.push({
                            name: rows[i][0],
                            class: rows[i][1],
                        });
                    }
                    resolve(data);
                });
            }

            if(req.body.type === 'classes'){
                readXlsxFile(filePath).then((rows) => {
                    for (let i = 1; i < rows.length; i++) {
                        data.push({
                        });
                    }
                    resolve(data);
                });
            }
        })
    ]).then(async () => {
        if(req.body.type === 'subjects'){
            data.map(async (item) => {
                let subject = new Subject(item);
                await subject.save();
            })
        }
        next(new OkResponse({message: "File uploaded successfully"}));
    })
})

module.exports = router;