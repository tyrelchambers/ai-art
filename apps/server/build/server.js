"use strict";
const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use("/api/v1", router);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
