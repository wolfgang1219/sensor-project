const express = require("express");
const app = express();

app.get("/temperature", (req, res) => {
	res.send("24°C");
});
app.get("/humidity", (req, res) => {
	res.send("48%");
});
app.listen(3000, () => {
	console.log("Srever listening on port 3000");
});
