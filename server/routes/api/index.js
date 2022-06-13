let router = require("express").Router();

router.use("/user", require("./user"));

router.use("/class", require("./class"));

router.use("/subject", require("./subject"));

router.use("/file", require("./file"));

router.use("/schedule", require("./schedule"));

router.use("/complaint", require("./complaint"));

router.use("/upload", require("./upload"));

module.exports = router;
