var express = require('express');
var router = express.Router();
var controller = require("../controllers/cookie_controller")

/* GET home page. */
router.get('/', controller.getCookie);

module.exports = router;
