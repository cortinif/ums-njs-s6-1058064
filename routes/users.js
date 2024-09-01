const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./user-form");

const router = express.Router();

router.get("/", (req, res, next) => {
	const users = adminData.users;
	// const products = [];
	const hasNotUsers = users.length <= 0;
	console.log(users);
	res.render("users", {
		pageTitle: "users",
		users: users,
		path: "/users",
		hasNotUsers,
		usersCSS: true,
		activeUser: true,
	}); // hbs
});

exports.routes = router;
