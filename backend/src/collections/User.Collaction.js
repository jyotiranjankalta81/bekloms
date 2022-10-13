const db = require("../models");
const TblUser = db.userModel;
const TblonBoard = db.onBoard;
const TblgetStarted = db.getStarted;
const TblBlog = db.BlogModel;
const TblCareer = db.CareerModel;
const TblContact = db.contactmodel;
const TblLUpdate = db.Latestupdatemodel;
const bcrypt = require("bcryptjs");
const uploadimage = require("../middlewares/imageupload");
const AuthCollaction = require("./Auth.Collaction");
const ApiError = require("../utils/ApiError");
const passport = require("passport");
const httpStatus = require("http-status");

class UserCollaction {
  createuser = async (body) => {
    const { F_NAME, L_NAME, PHONENO, EMAIL, PASSWORD } = body;
    const salt = bcrypt.genSaltSync(12);
    const hashencrypt = bcrypt.hashSync(PASSWORD, salt);
    const createdAt = Date.now();
    let result = "";
    const query = await TblUser.create({
      F_NAME,
      L_NAME,
      PHONENO,
      EMAIL,
      PASSWORD: hashencrypt,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "Created Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });

    return result;
  };

  onBoard = async (body) => {
    const { NAME,EMAIL,PHONENO,ABOUT,FILE } = body;
    const createdAt = Date.now();
    let result = "";
    const query = await TblonBoard.create({
      NAME,
      EMAIL,
      PHONENO,
      ABOUT,
      FILE,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "Created Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });

    return result;
  };

  getOnBoard = async () => {
    let result = "";
    await TblonBoard.findAll({})
      .then((res) => {
        result = {
          status: 1,
          message: "",
          data: res,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  getStarted = async (body) => {
    const { NAME,EMAIL,PHONENO } = body;
    const createdAt = Date.now();
    let result = "";
    const query = await TblgetStarted.create({
      NAME,
      EMAIL,
      PHONENO,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "Created Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });

    return result;
  };

  resetPassword = async (body) => {
    const { USER_ID, OLDPASSWORD, NEWPASSWORD } = body;
    const salt = bcrypt.genSaltSync(12);
    const hashencrypt = bcrypt.hashSync(NEWPASSWORD, salt);
    const createdAt = Date.now();
    let result = "";
    // console.log(body);

    const user = await TblUser.findOne({ where: { USER_ID: USER_ID } });

    if (user && (await AuthCollaction.isPasswordMatch(OLDPASSWORD, user.PASSWORD))) {

      const query = await TblUser.update({
        PASSWORD: hashencrypt,
      }, { where: { USER_ID: USER_ID } })
        .then((res) => {
          result = {
            status: 1,
            message: "Password Update Successfully",
            data: res.dataValues,
          };
        })
        .catch((err) => {
          result = {
            status: 0,
            message: "Somthing Went Wrong",
            data: err,
          };
        });


    } else {
      throw new ApiError(httpStatus.UNAUTHORIZED, "old password not match");

    }

    return result;
  };

  getUse = async (header) => {
    let result = "";
    const query = await TblUser.findOne({
      where: {
        USER_ID: header.sub,
      },
    })
      .then((res) => {
        result = {
          status: 1,
          message: "Find User!",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  createblog = async (header, req) => {
    const { BLOG_NAME, BLOG_CATEGORY, BLOG_CONTANT } = req.body;
    const BLOG_IMAGE = uploadimage(req.files.BLOG_IMAGE);

    let result = "";
    const query = await TblBlog.create({
      BLOG_NAME,
      BLOG_CATEGORY,
      BLOG_CONTANT,
      BLOG_IMAGE,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "Blog Created Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  updateblog = async (header, req) => {
    let result = "";
    const { BLOG_NAME, BLOG_CATEGORY, BLOG_CONTANT } = req.body;
    if (req.files.BLOG_IMAGE) {
      const BLOG_IMAGE = uploadimage(req.files.BLOG_IMAGE);
      await TblBlog.create({
        BLOG_NAME,
        BLOG_CATEGORY,
        BLOG_CONTANT,
        BLOG_IMAGE,
        ISDELETED: false,
      })
        .then((res) => {
          result = {
            status: 1,
            message: "Blog Created Successfully",
            data: res.dataValues,
          };
        })
        .catch((err) => {
          result = {
            status: 0,
            message: "Somthing Went Wrong",
            data: err,
          };
        });
    } else {
      await TblBlog.update(
        {
          BLOG_NAME,
          BLOG_CATEGORY,
          BLOG_CONTANT,
          ISDELETED: false,
        },
        {
          where: {
            BLOG_ID: req.body.BLOG_ID,
          },
        }
      )
        .then((res) => {
          result = {
            status: 1,
            message: "Blog Created Successfully",
            data: res.dataValues,
          };
        })
        .catch((err) => {
          result = {
            status: 0,
            message: "Somthing Went Wrong",
            data: err,
          };
        });
    }
    return result;
  };

  getblog = async () => {
    let result = "";
    await TblBlog.findAll({})
      .then((res) => {
        result = {
          status: 1,
          message: "",
          data: res,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  createcareer = async (header, req) => {
    console.log(req.files);

    const { CAREER_PERSON_NAME, CAREER_PERSON_EMAIL } = req.body;
    const CAREER_PERSON_RESUME = uploadimage(req.files.CAREER_PERSON_RESUME);
    let result = "";
    const query = await TblCareer.create({
      CAREER_PERSON_NAME,
      CAREER_PERSON_EMAIL,
      CAREER_PERSON_RESUME,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "your form submitted Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  getcareer = async () => {
    let result = "";
    await TblCareer.findAll({})
      .then((res) => {
        result = {
          status: 1,
          message: "",
          data: res,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  createcontacts = async (header, req) => {
    const { CONTACT_NAME, CONTACT_EMAIL, CONTACT_MESSAGE } = req.body;
    let result = "";
    const query = await TblContact.create({
      CONTACT_NAME,
      CONTACT_EMAIL,
      CONTACT_MESSAGE,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "your form submitted Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  getcontacts = async () => {
    let result = "";
    await TblContact.findAll({})
      .then((res) => {
        result = {
          status: 1,
          message: "",
          data: res,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  getlatestupdate = async () => {
    let result = "";
    await TblLUpdate.findAll({})
      .then((res) => {
        result = {
          status: 1,
          message: "",
          data: res,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };

  createlatestupdate = async (header, req) => {
    const { LU_TITLE, LU_TEXT } = req.body;
    const LU_IMAGE = uploadimage(req.files.LU_IMAGE);
    let result = "";
    const query = await TblLUpdate.create({
      LU_TITLE,
      LU_TEXT,
      LU_IMAGE,
      ISDELETED: false,
    })
      .then((res) => {
        result = {
          status: 1,
          message: "your form submitted Successfully",
          data: res.dataValues,
        };
      })
      .catch((err) => {
        result = {
          status: 0,
          message: "Somthing Went Wrong",
          data: err,
        };
      });
    return result;
  };
}

module.exports = new UserCollaction();
