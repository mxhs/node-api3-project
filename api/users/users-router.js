const express = require("express");

const Users = require("./users-model");
const router = express.Router();

const { validateUserId, validateUser } = require("../middleware/middleware");

router.post("/", (req, res) => {
	// do your magic!
	// this needs a middleware to check that the request body is valid
});

router.get("/", (req, res) => {
	// do your magic!
	Users.get().then((users) => {
		if (users) {
			res.status(200).json(users);
		} else {
			res.status(404).json({ message: "Users could not be retrieved" });
		}
	});
});

router.get("/:id", (req, res) => {
	// do your magic!
	// this needs a middleware to verify user id
});

router.delete("/:id", (req, res) => {
	// do your magic!
	// this needs a middleware to verify user id
});

router.put("/:id", (req, res) => {
	// do your magic!
	// this needs a middleware to verify user id
	// and another middleware to check that the request body is valid
});

router.post("/:id/posts", (req, res) => {
	// do your magic!
	// this needs a middleware to verify user id
	// and another middleware to check that the request body is valid
});

router.get("/:id/posts", (req, res) => {
	// do your magic!
	// this needs a middleware to verify user id
});

// do not forget to export the router
module.exports = router;
