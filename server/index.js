const express = require("express");
const app = express();
const light_control = require("./light-control");
const path = require("path");
app.use("/public",express.static(path.join(__dirname,"public")));
app.get("/temperature", (req, res) => {
	res.send("24°C");
});
app.get("/humidity", (req, res) => {
	res.send("48%");
});
app.get("/on", function(req, res){
	light_control.on();
	res.send("light is on")
	console.log("light is on");
});
app.get("/off", function(req, res){
	light_control.off();
	res.send("light is off")
	console.log("light is off");
});
app.listen(3000, () => {
	console.log("Srever listening on port 3000");
});
