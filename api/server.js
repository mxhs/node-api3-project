const express = require("express");
const postsRouter = require("./posts/posts-router");
const usersRouter = require("./users/users-router");

const server = express();

const { logger } = require("./middleware/middleware");

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
server.use(logger);

// global middlewares and routes need to be connected here
server.use("/api/posts", postsRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
