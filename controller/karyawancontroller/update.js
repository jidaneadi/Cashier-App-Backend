const { User, Karyawan} = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async(req, res) => {
    const id = req.params.id;

    const selectUser = await User.findByPk(id);
    const selectKaryawan = await Karyawan.findOne({
        where : {id_user : id},
    });

    if(!selectUser && !selectKaryawan){
        return res.status(404).json({
            msg : "User not found"
        })
    }

    const schema ={
        email : "email | empty=false",
        password : " string | min=8",
        role : "string | empty=true",
        nama : "string | empty=false",
        no_hp : "string | empty=false",
        alamat :"string | empty=false",
        status : "string | empty = true"
    }

    if(req.body.email === ""){
        return res.status(400).json({msg:"Kolom email tidak boleh kosong!"})
    }

    if(req.body.password === ""){
        return res.status(400).json({msg:"Kolom password tidak boleh kosong!"})
    }

    if(req.body.nama === ""){
        return res.status(400).json({msg:"Kolom nama tidak boleh kosong!"})
    }

    if(req.body.no_hp === ""){
        return res.status(400).json({msg:"Kolom nomor hp tidak boleh kosong!"})
    }

    if(req.body.alamat === ""){
        return res.status(400).json({msg:"Kolom alamat tidak boleh kosong!"})
    }

    if(req.body.status === ""){
        return res.status(400).json({msg:"Kolom status tidak boleh kosong!"})
    }

    const validation = v.validate(req.body, schema)
    if(validation.length){
        return res.status(400).json({ msg : validation })
    }

    const newDataUser = {
        email : req.body.email,
        password :  req.body.password,
        role : req.body.role
    }


    const newDataKaryawan = {
        id_user : id,
        nama : req.body.nama,
        no_hp : req.body.no_hp,
        alamat :req.body.alamat,
        status : req.body.status
    }

    await selectUser.update(newDataUser)
    await selectKaryawan.update(newDataKaryawan)

    return res.status(200).json({msg : "Data berhasil di update"})

}