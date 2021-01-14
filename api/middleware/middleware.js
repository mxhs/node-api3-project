const Posts = require("../posts/posts-model");
const PORT = require("../../index");

function logger(req, res, next) {
	// do your magic!
	const { method, baseUrl, url } = req;
	console.log("\n  **Logger**    \n");
	console.log("REQ METHOD: ", method);
	console.log("REQ URL: ", `http://localhost:${PORT}`, baseUrl, url);
	console.log("REQ METHOD: ", new Date());
	console.log("\n    ****    \n");
	next();
}

function validateUserId(req, res, next) {
	// do your magic!
	console.log("checking userId");
}

function validateUser(req, res, next) {
	// do your magic!
}

async function validatePostId(req, res, next) {
	// do your magic!
	console.log("checking postId");
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
