const Posts = require("../posts/posts-model");

function logger(req, res, next) {
	// do your magic!
	console;
}

function validateUserId(req, res, next) {
	// do your magic!
}

function validateUser(req, res, next) {
	// do your magic!
}

async function validatePostId(req, res, next) {
	// do your magic!
	console.log("checking post id");
	try {
		const post = await Posts.getById(req.params.id);
		if (post) {
			req.post = post;
			next();
		} else {
			res.status(404).json(`post with id ${req.params.id} is not found`);
		}
	} catch (error) {
		res.status(500).json("Whats a better message to put here?");
	}
}

function validatePost(req, res, next) {
	// do your magic!
}

// do not forget to expose these functions to other modules
module.exports = {
	logger,
	validateUserId,
	validateUser,
	validatePostId,
	validatePost,
};
