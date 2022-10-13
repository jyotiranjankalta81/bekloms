const httpStatus = require("http-status");
const { UserCollection } = require("../collections");
const AuthCollaction = require("../collections/Auth.Collaction");
const ApiError = require("../utils/ApiError");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createuser = async (userBody) => {
  const result = await UserCollection.createuser(userBody);
  return result;
};
const resetPassword = async (userBody) => {
  const result = await UserCollection.resetPassword(userBody);
  return result;
};

const getUse = async (header) => {
  const user = await UserCollection.getUse(header);
  return user;
};
/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginuser = async (email, password) => {
  const user = await AuthCollaction.getUserByEmail(email);
  if (
    !user ||
    !(await AuthCollaction.isPasswordMatch(password, user.PASSWORD))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  return user;
};

const createblog = async (header, req) => {
  const result = await UserCollection.createblog(header, req);
  return result;
};

const updateblog = async (header, req) => {
  const result = await UserCollection.updateblog(header, req);
  return result;
};

const getblog = async () => {
  const result = await UserCollection.getblog();
  return result;
};

const deleteblog = async (header, req) => {
  const result = await UserCollection.deleteblog(header, req);
  return result;
};

const createcareer = async (header, req) => {
  const result = await UserCollection.createcareer(header, req);
  return result;
};

const getcareer = async (header, req) => {
  const result = await UserCollection.getcareer(header, req);
  return result;
};

const createcontacts = async (header, req) => {
  const result = await UserCollection.createcontacts(header, req);
  return result;
};

const getcontacts = async (header, req) => {
  const result = await UserCollection.getcontacts(header, req);
  return result;
};

const createlatestupdate = async (header, req) => {
  const result = await UserCollection.createlatestupdate(header, req);
  return result;
};

const getlatestupdate = async (header, req) => {
  const result = await UserCollection.getlatestupdate(header, req);
  return result;
};
// onboarding
const onBoard = async (body) => {
  const result = await UserCollection.onBoard(body);
  return result;
};
const getOnBoard = async (body) => {
  const result = await UserCollection.getOnBoard(body);
  return result;
};

// get Started
const getStarted = async (body) => {
  const result = await UserCollection.getStarted(body);
  return result;
};


module.exports = {
  createuser,
  getStarted,
  onBoard,
  getOnBoard,
  loginuser,
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
