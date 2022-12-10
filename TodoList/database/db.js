const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb://root:root@ac-ushqkjx-shard-00-00.gvalhgh.mongodb.net:27017,ac-ushqkjx-shard-00-01.gvalhgh.mongodb.net:27017,ac-ushqkjx-shard-00-02.gvalhgh.mongodb.net:27017/?ssl=true&replicaSet=atlas-wsrkeq-shard-0&authSource=admin&retryWrites=true&w=majority",
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
