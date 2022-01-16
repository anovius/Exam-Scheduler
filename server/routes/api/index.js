let router = require("express").Router();

router.use("/user", require("./user"));

router.use("/class", require("./class"));

router.use("/upload", require("./upload"));

module.exports = router;
