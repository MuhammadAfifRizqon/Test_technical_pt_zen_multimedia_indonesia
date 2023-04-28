import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { createError } from "../utilities/Error"


const regUsers = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const createUser = await req.context.models.users.create({
      id_users : req.body.id_users,
        name_users : req.body.name_users,
        password: hash,
        isadmin: req.body.isadmin,
    });
    return res.status(200).json({ message: "Registrasi is Success" });
  } catch (error) {
    next(Error);
  }
  };



// Login
const login = async (req, res, next) => {
  try {
    const users = await req.context.models.users.findOne({
      where: { name_users: req.body.name_users },
    });
    if (!users) return next(createError(404, "User Is  Not Found"));
    const isPassword = await bcrypt.compare(
      req.body.password,
      users.password
    );
    if (!isPassword)
      return next(createError(404, "Password Invalid"));
    const token = jwt.sign(
      {
        id: users.id_users,
        isadmin: users.isadmin,
      },
      process.env.JWT
    );
    const { password, isadmin, ...otherDetails } = users.dataValues;
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ data: { ...otherDetails }, message: "Login Success" });
  } catch (error) {
    next(error);
  }
};

export default {
  regUsers,
  login,
};