// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URL, {})
//     .then((data) => {
//       console.log(`mongoDB connected with server: ${data.connection.host}`);
//     })
//     .catch((error) => {
//       console.error("MongoDB connection error:", error);
//     });
// };

// module.exports = connectDatabase;
const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};