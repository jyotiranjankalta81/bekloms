const Joi = require('@hapi/joi');
const { password } = require('./custom.validation');

// const register = {
//   body: Joi.object().keys({
//     ID: Joi.number(),
//     userName: Joi.string().required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().required().custom(password),
//     phone: Joi.string().required(),
//   }),
// };

const login = {
  body: Joi.object().keys({
    PHONENO: Joi.string().max(10).required(),
  }),
};

module.exports = {
//   register,
  login,
};
