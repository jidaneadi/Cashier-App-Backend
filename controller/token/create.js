const Validator = require("fastest-validator");
const jwt = require("jsonwebtoken");
const v = new Validator();
const { User } = require("../../models");

module.exports = async (req, res) => {
  //   try {
  const schema = {
    refresh_token: "string | empty=false",
  };

  const validation = v.validate(req.body, schema);

  if (validation.lenght) {
    return res.status(400).json({
      msg: validation,
    });
  }

  // if (!refreshToken) {
  //   return res.status(403).json({
  //     status: "error in refreshToken",
  //     message: "Token error",
  //   });
  // }

  const decoded = jwt.decode(req.body.refresh_token);
  console.log(decoded.idUser);
  //FROM REFERENCE
  // const user = await User.findOne({
  //     where : { token : refreshToken }
  // });

  // await jwt.decode
  const user = await User.findAll({
    where: { id: decoded.idUser },
  });

  if (!user[0]) {
    return res.status(404).json({
      status: "error in refreshToken",
      message: "User not found",
    });
  }
  //FROM REFERENCE
  // const { id, name, profession, avatar, role, email, pass } = user;

  await jwt.verify(
    req.body.refresh_token,
    process.env.REFRESH_KEY,
    async (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: "error in refreshToken",
          message: "Token failed",
        });
      }
      const idUser = user[0].id;
      const name = user[0].name;
      const role = user[0].role;
      const email = user[0].email;
      const accesToken = await jwt.sign(
        { idUser, name, role, email },
        process.env.ACCES_KEY,
        {
          expiresIn: "1h",
        }
      );

      const refreshToken = jwt.sign(
        { idUser, name, role, email },
        process.env.REFRESH_KEY,
        {
          expiresIn: "1d",
        }
      );

      res.status(200).json({
        acces_token : accesToken,
        refresh_token : refreshToken
       });
    }
  );
  //   } catch (error) {
  //     console.log(error);
  //   }
};
