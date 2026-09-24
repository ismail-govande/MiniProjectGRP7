const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Employee = require("./models/employee");

const app = express();

app.use(express.json());
app.use(express.static("frontend"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => console.log(err));

app.get("/employees", async (req, res) => {
    const employees = await Employee.find();

    res.json({
        success: true,
        count: employees.length,
        data: employees
    });
});