const { User } = require("../../models");
const Validator = require("fastest-validator");
const jwt = require("jsonwebtoken");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    email: "string | empty:false",
    password: "string | empty:false | min : 8",
  };

  const validation = v.validate(req.body, schema);

  if (validation.lenght) {
    return res.status(400).json({
      msg: validation,
    });
  }

  const cek = await User.findOne({
    where: { email: req.body.email },
  });

  if (!cek) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  if (cek.password != req.body.password) {
    return res.status(400).json({
      status: "error",
      message: "Password failed",
    });
  }

  const idUser = cek.id;
  const name = cek.name;
  const role = cek.role;
  const email= cek.email;

  const accesToken = jwt.sign(
    { idUser, name, role },
    process.env.ACCES_KEY,
    {
      expiresIn: "360s",
    }
  );

  const refreshToken = jwt.sign(
    { idUser, name, role },
    process.env.REFRESH_KEY,
    {
      expiresIn: "1d",
    }
  );

  return res.status(200).json({
    status: "succes",
    message: {
      id: cek.id,
      name: cek.name,
      role: cek.role,
      acces_token: accesToken,
      refresh_token: refreshToken,
    },
  });
};
