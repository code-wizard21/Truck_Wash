const db = require("../models");
const Customerlist = db.customer;
exports.Register = () => {};
exports.getAllList = async (req, res) => {
  console.log(req.body);
  const customerlist = await Customerlist.findAll({
    where: {
      State: "request",
    },
  });
  res.send(customerlist);
};
exports.getAcceptList = async (req, res) => {
  console.log("2322322323");
  console.log(req.body);
  const customerlist = await Customerlist.findAll({
    where: {
      State: "accepted",
    },
  });
  res.send(customerlist);
};
