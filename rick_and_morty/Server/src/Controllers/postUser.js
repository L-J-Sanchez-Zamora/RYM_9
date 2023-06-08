const { User } = require("../DB_connection.js");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Faltan datos postUser");

    const user = await User.findOrCreate({ where: { email, password } });
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
/*
const { User } = require("../DB_connection.js");
require ("dotenv").config();

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Faltan datos postUser");

    let user = await User.findOne({ where: { email } });
    if (!user) {
    user = await User.create({ email, password });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

*/
/*
registrer
const { User } = require("../DB_connection.js");
require ("dotenv").config();

module.exports = async (req, res) => {
  const { id, email, password } = req.body;
  try {
    if (!email || !password){
    res.status(STATUS_ERROR).json({message:"error"});
    }
    const user = await User.create({id, email, password});
    res.status(STATUS_OK).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
*/
