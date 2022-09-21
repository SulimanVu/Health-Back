require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Подключено к Mongo"))
  .catch(() => console.log("Ошибка подключения"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(` Сервер: ${process.env.SERVER_PORT} был запущен`);
});
