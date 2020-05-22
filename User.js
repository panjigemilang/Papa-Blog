const Sequelize = require("sequelize")
const db = require("../config/db")

const User = db.define(
  "user",
  {
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    who: { type: Sequelize.STRING },
  },
  {
    freezeTableName: true,
  }
)

module.exports = User
