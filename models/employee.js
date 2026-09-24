const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    employeeName: String,
    designation: String,
    email: String,
    department: String,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;