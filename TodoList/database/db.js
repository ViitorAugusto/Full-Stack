const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectToDb = () => {
  mongoose
  
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to database: ", err.message);
    });
};
module.exports = connectToDb;
