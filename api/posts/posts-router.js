const express = require("express");

const Posts = require("./posts-model");
const router = express.Router();

const { validatePostId } = require("../middleware/middleware");

router.get("/", (req, res) => {
	// do your magic!
	Posts.get().then((posts) => {
		if (posts) {
			res.status(200).json(posts);
		} else {
			res.status(404).json({ message: "Posts could not be retrieved" });
		}
	});
});

router.get("/:id", validatePostId, (req, res) => {
	// do your magic!
	// this needs a middleware to verify post id
	res.status(200).json(req.post);
	console.log(req);
});

router.delete("/:id", validatePostId, (req, res) => {
	// do your magic!
	// this needs a middleware to verify post id
	Posts.remove(req.params.id).then(() => {
		res
			.status(200)
			.json({ message: `Post with id ${req.params.id} has been removed` });
	});
});

router.put("/:id", validatePostId, (req, res) => {
	// do your magic!
	// this needs a middleware to verify post id
	Posts.update(req.params.id, req.body)
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: "Error updating the post" });
		});
});

// do not forget to export the router
module.exports = router;
