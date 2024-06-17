const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const routes = require("./routes/routes");
const {FRONTEND_URL, PORT} = require("./config.js");
//import { FRONTEND_URL, PORT } from "./config.js";

//const cors = require("express-cors");
const cors = require("cors");

const app = express();
const port = PORT;


app.use(
  cors({
    origin: "FRONTEND_URL",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
