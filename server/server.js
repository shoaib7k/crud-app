const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//var corsOptions = {
  //origin: "http://localhost:8081"
//};
app.use(function(req, res, next) {

  //to allow cross domain requests to send cookie information.
  res.header('Access-Control-Allow-Credentials', true);
  
  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin',  req.headers.origin);
  
  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
  
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
  
      next();
  });
app.use(cors());

const db=require("./models");



db.sequelize.sync();


/*db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
 });*/

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});


require("./app/routes/brand.routes")(app);
require("./app/routes/product.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});