const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("Base de datos Online");
  } catch (error) {
    console.log(error);
    throw Error("Error a la hora de unicializar DB");
  }
};

module.exports = {
  dbConnection,
};
