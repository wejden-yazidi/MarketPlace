const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./controllers/user.js");
const shop = require("./controllers/shop.js");
const product = require("./controllers/product.js");
const event = require("./controllers/event.js");
const coupon = require("./controllers/coupounCode");
const conversation = require("./controllers/conversation");
const message = require("./controllers/message");
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
app.use("/", express.static("uploads"));

// Routes
app.use("/api/user", user);
app.use("/api/shop", shop);
app.use("/api/product", product);
app.use("/api/event", event);
app.use("/api/coupon", coupon);
app.use("/api/conversation", conversation);
app.use("/api/message", message);


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}
// ErrorHandling
app.use(ErrorHandler);

module.exports = app;
