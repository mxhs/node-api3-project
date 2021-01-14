// require your server and start it
const server = require("./api/server");
const PORT = 4002;

server.listen(PORT, () => {
	console.log(`***Server running on port ${PORT}***`);
});
