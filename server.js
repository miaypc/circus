const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

const routes = require("./routes/");
const MONGO_URI = process.env.F || "mongodb://localhost/circus";

app.use(express.static(path.join(__dirname, "client/build")));

const connect = () => {
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

app.use(cors());
app.use(express.json());
app.use("/api", routes);
// /api/booking
// /booking

connect();
const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
