const httpStatus = require("http-status");
const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const { generateAuthTokens } = require("../utils/tokens");
const jwt_decode = require("jwt-decode");
const ApiError = require("../utils/ApiError");

const createUser = catchAsync(async (req, res) => {
  const userdata = await userService.createuser(req.body);
  res.status(httpStatus.CREATED).send(userdata);
});

const resetPassword = catchAsync(async (req, res) => {
  const password = await userService.resetPassword(req.body);
  res.status(httpStatus.CREATED).send(password);
});
const getUse = catchAsync(async (req, res) => {
  const header = jwt_decode(req.header("authorization"));
  const data = await userService.getUse(header);
  res.status(httpStatus.CREATED).send(data);
});

const loginuser = catchAsync(async (req, res) => {
  const { EMAIL, PASSWORD } = req.body;
  const data = await userService.loginuser(EMAIL, PASSWORD);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, "!somthing Went Wrong");
  }
  const tokens = await generateAuthTokens(data);
  res.send({
    user: {
      id: data.USER_ID,
      phone: data.PHONENO,
      email: data.EMAIL,
    },
    tokens,
  });
});

const createblog = catchAsync(async (req, res) => {
  const headers = "";
  // const headers = jwt_decode(req.header("authorization"));
  const userdata = await userService.createblog(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const updateblog = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.updateblog(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const getblog = catchAsync(async (req, res) => {
  const userdata = await userService.getblog();
  res.status(httpStatus.CREATED).send(userdata);
});

const deleteblog = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.deleteblog(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const createcareer = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.createcareer(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const getcareer = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.getcareer(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const createcontacts = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.createcontacts(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const getcontacts = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.getcontacts(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const createlatestupdate = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.createlatestupdate(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});

const getlatestupdate = catchAsync(async (req, res) => {
  const headers = "";
  const userdata = await userService.getlatestupdate(headers, req);
  res.status(httpStatus.CREATED).send(userdata);
});


// onBoarding section
const onBoard = catchAsync(async (req, res) => {
  const userdata = await userService.onBoard(req.body);
  res.status(httpStatus.CREATED).send(userdata);
});

// getonBoarding section
const getOnBoard = catchAsync(async (req, res) => {
  const userdata = await userService.getOnBoard(req.body);
  res.status(httpStatus.CREATED).send(userdata);
});

// get Started
const getStarted = catchAsync(async (req, res) => {
  const userdata = await userService.getStarted(req.body);
  res.status(httpStatus.CREATED).send(userdata);
});



module.exports = {
  createUser,
  loginuser,
  onBoard,
  getOnBoard,
  getStarted,
  resetPassword,
  getUse,
  createblog,
  updateblog,
  getblog,
  deleteblog,
  createcareer,
  getcareer,
  createcontacts,
  getcontacts,
  createlatestupdate,
  getlatestupdate
};
