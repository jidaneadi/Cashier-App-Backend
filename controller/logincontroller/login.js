const {Login} = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const schema = {
        email : "string | empty:false",
        password : "string | empty:false | min : 8",
    }

    const validation = v.validate(req.body, schema)

    if(validation.lenght) {
        return res.status(400).json({
            msg : validation
        })
    }

    const cek = await Login.findOne({
        where:{email: req.body.email}
    });

    if (!cek){
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }
    const validPassword = await bcrypt.compare(req.body.pass, cek.pass);

    if (!validPassword){
        return res.status(400).json({
            status: 'error',
            message: 'Password failed'
        });
    }

    const idUser = cek.id;
    const name = cek.name;


    const accesToken = jwt.sign({idUser, name }, process.env.ACCES_TOKEN_SECRET, {
        expiresIn : '360s'
    });

    const refreshToken = jwt.sign({idUser, name, profesi, role, email}, process.env.REFRESH_ACCES_TOKEN_SECRET, {
        expiresIn: '1d'
    });

    
    return res.status(200).json({
        status: "succes",
        message: {
            id: cek.id,
            name: cek.name,
            acces_token : accesToken,
            refreshToken : refreshToken,
        }
    });
}