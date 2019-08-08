const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  path = require("path"),
  favicon = require("serve-favicon"),
  publicPath = path.join(__dirname, "..", "public");

//db config
const db = require("../config/keys.js").mongoURI;
//db connect
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));


// favicon
app.use("/images", express.static(__dirname + "../public/images"));
app.use(favicon(path.join(__dirname, "../public/images", "eric.ico")));

//server static if production

//set static folder

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started at 3000");
  }
});
