const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');


//routers
const userRoute = require("./router/user.router.js");
const orderRoute = require("./router/order.router.js");
const productRoute = require("./router/product.router.js");
const app = express();
app.use(cors())
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(function (request, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    //intercept the OPTIONS call so we don't double up on calls to the integration
    if ('OPTIONS' === request.method) {
      res.send(200);
    } else {
      next();
    }
  });

//router
app.use("/api/orders", orderRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

mongoose.connect('mongodb://127.0.0.1:27017/dbmanga').then(() => {
    console.log("conected to database!");
    app.listen(3001, () => {
        console.log("server is running in port 3001");
    });
}).catch(() => {
    console.log("connect failed!");
})


