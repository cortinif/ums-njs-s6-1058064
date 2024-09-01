const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userData = require("./routes/user-form");
const usersData = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userData.routes);
app.use("/users", usersData.routes);

app.use((req, res, next) => {
	res.status(404).render("404", { pageTitle: "Page not found", path: "" }); // hbs
});

app.listen(3000);
