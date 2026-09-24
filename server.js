const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Employee = require("./models/employee");

const app = express();

app.use(express.json());
app.use(express.static("frontend"));