const express = require('express');
const defaultController = require('../controllers/defaultController');
const {addUser,loginUser} = require('../controllers/user/user.controller');
const userValidator = require('../controllers/user/user.validator')
const router = express.Router();
router.get("/",defaultController);
router.post("/signup",userValidator,addUser)
router.post("/login",loginUser)

module.exports = router