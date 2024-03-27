const { Product } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const data = await Product.findByPk(id);
  if (!data) {
    return res.status(404).json({ msg: "Id tidak ditemukan" });
  }
  return res.json(data);
};
