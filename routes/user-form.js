const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const users = [];

// / => GET
router.get("/", (req, res, next) => {
	res.render("user-form", {
		pageTitle: "Add User",
		path: "/",
		userCSS: true,
		formsCSS: true,
		activeAddProduct: true,
	}); // hbs
});

// /add-user => POST
router.post("/add-user", (req, res, next) => {
	users.push({ name: req.body.name });
	res.redirect("/users");
});

exports.routes = router;
exports.users = users;
