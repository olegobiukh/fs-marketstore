const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_shop",
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'https://apis.google.com' 'inline-speculation-rules';"
  );
  next();
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM products", (error, results, fields) => {
    if (error) {
      console.error("Error fetching data from MySQL:5545", error);
      res.status(500).send("Error fetching data from MySQL: " + error.message);
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
