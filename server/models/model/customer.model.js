module.exports = (sequelize, Sequelize) => {
  const Userlist = sequelize.define("customer", {
    CustomerName: {
      type: Sequelize.STRING,
    },
    PhoneNumber: {
      type: Sequelize.STRING,
    },
    CarNumber: {
      type: Sequelize.STRING,
    },
    Detail: {
      type: Sequelize.STRING,
    },
    Date: {
      type: Sequelize.STRING,
    },
    State: {
      type: Sequelize.STRING,
    },
  });

  return Userlist;
};
