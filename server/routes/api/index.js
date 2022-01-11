let router = require("express").Router();

router.use("/upload", require("./upload"));

module.exports = router;
