const db = require("../models");
const Customer = db.customer;

exports.Register = async (req, res) => {
  console.log(req.body);
  const userlist = {
    CustomerName: req.body.CustomerName,
    PhoneNumber: req.body.PhoneNumber,
    CarNumber: req.body.CarNumber,
    Detail: req.body.Detail,
    Date: req.body.Date,
    State: "accept"
  };
  // Save Tutorial in the database
  Customer.create(userlist)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the userlist.",
      });
    });
};
