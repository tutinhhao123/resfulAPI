const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')


//routers
const userRoute = require("./router/user.router.js");
const orderRoute = require("./router/order.router.js");
const productRoute = require("./router/product.router.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


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


