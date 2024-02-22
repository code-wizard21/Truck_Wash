const db = require("../models");
const Customerlist = db.customer;
exports.Register = () => {};
exports.getAllList = async (req, res) => {
  const customerlist = await Customerlist.findAll({
    where: {
      State: "request",
    },
  });

  res.send(customerlist);
};
