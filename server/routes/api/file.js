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
var Room = mongoose.model("Room");


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
                            degree: rows[i][0],
                            year: rows[i][1],
                            section: rows[i][2],
                        });
                    }
                    resolve(data);
                });
            }

            if(req.body.type === 'teachers'){
                readXlsxFile(filePath).then((rows) => {
                    for (let i = 1; i < rows.length; i++) {
                        data.push({
                            fullName: rows[i][0],
                            email: rows[i][1],
                            userName: rows[i][2],
                        });
                    }
                    resolve(data);
                });
            }

            if(req.body.type === 'students'){
                readXlsxFile(filePath).then((rows) => {
                    for (let i = 1; i < rows.length; i++) {
                        data.push({
                            fullName: rows[i][0],
                            email: rows[i][1],
                            userName: rows[i][2],
                        });
                    }
                    resolve(data);
                });
            }

            if(req.body.type === 'others'){
                readXlsxFile(filePath).then((rows) => {
                    for (let i = 1; i < rows.length; i++) {
                        data.push({
                            name: rows[i][0],
                            capacity: rows[i][1],
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

        if(req.body.type === 'classes'){
            data.map(async (item) => {
                let classs = new Class(item);
                await classs.save();
            })
        }

        if(req.body.type === 'teachers'){
            data.map(async (item) => {
                let user = new User(item);
                user.setPassword(item.userName);
                user.role = 2;
                await user.save();
            })
        }

        if(req.body.type === 'students'){
            data.map(async (item) => {
                let user = new User(item);
                user.setPassword(item.userName);
                user.role = 3;
                await user.save();
            })
        }

        if(req.body.type === 'others'){
            data.map(async (item) => {
                let room = new Room(item);
                await room.save();
            })
        }

        next(new OkResponse({message: "File uploaded successfully"}));
    })
})

module.exports = router;