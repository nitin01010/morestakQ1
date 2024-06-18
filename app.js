require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/routes"));
require("./db/dbConnect");

app.listen(Port, () => {
    console.log(`server is working ${Port}`);
});