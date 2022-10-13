const express = require("express");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { userValidation } = require("../../validations");

const router = express.Router();

router.route("/login").post(userController.loginuser);
router.route("/register").post(userController.createUser);
router.route("/resetpassword").put(userController.resetPassword);
router.route("/userdata").get(userController.getUse);


// onboard
router.route("/onboard").post(userController.onBoard);
router.route("/onboard").get(userController.getOnBoard);

// getStarted
router.route("/getstarted").post(userController.getStarted);




//Blog
router.route("/Blog").post(userController.createblog);
router.route("/Blog").put(userController.updateblog);
router.route("/Blog").get(userController.getblog);
router.route("/Blog").delete(userController.deleteblog);

//careerform
router.route("/career").post(userController.createcareer);
router.route("/career").get(userController.getcareer);

//contacts
router.route("/contacts").post(userController.createcontacts);
router.route("/contacts").get(userController.getcontacts);

//LatestUpdate

router.route("/LatestUpdate").post(userController.createlatestupdate);
router.route("/LatestUpdate").get(userController.getlatestupdate);

module.exports = router;
