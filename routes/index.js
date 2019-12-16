const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller")
const AuthenticationController = require("./../controllers/authentication_controller")
const { celebrate, Joi, Segments } = require("celebrate");


router.get("/", PageController.index);

//Authentication
    //New form: no validation on this
    router.get("/register", AuthenticationController.registerNew); 

    //Create function: validation on this
    router.post("/register", celebrate({
        [Segments.BODY]: {
            email: Joi.string().required(),
            password: Joi.string().required()
        }
    }), AuthenticationController.registerCreate)

//Dashboard
router.get("/dashboard", PageController.dashboard)

module.exports = router;