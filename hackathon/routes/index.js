var orderCtrl = require("./orders");

module.exports = (app) => {
	app.get('/', (req,res) => {
		res.sendFile("home.html", {root: "../hackFriday/public/html"})
	});


	app.get("/order", orderCtrl.get);
	// app.get("/order/:id", orderCtrl.get);
	app.post("/order", orderCtrl.upsert);
	// app.post("/order/:id", orderCtrl.upsert);
}
