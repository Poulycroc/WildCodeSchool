const Address = require("../models/Address");

module.exports = {
  new: (req, res) => {
    const dataAddress = req.body;
    const address = new Address();
    address.insert(dataAddress, (error, result) => {
      if (error) throw error;
      res.json(dataAddress);
    });
  }
};
