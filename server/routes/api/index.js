let router = require("express").Router();

router.use("/user", require("./user"));

router.use("/upload", require("./upload"));

module.exports = router;
