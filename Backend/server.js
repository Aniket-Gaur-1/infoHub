const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/userRoute"); // Assuming this is correctly defined
const user = require("./models/userModels"); // Assuming this is correctly defined

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("connected successfully");
        app.listen(process.env.PORT || 8000, (error) => {
            if (error) console.log(error);
            console.log("running successfully at :", process.env.PORT || 8000);
        });
    })
    .catch((error) => {
        console.log("error", error);
    });

app.use(userRouter);

module.exports = app; // Exporting the app for testing or other uses