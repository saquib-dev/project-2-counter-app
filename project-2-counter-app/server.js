const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 786;
// Middleware to parse JSON bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
let count = 0; // In-memory storage for the counter
// API to get the current count
app.get("/api/count", (req, res) => {
res.json({ count: count });
});
// API to update the count
app.post("/api/count", (req, res) => {
if (typeof req.body.count === "number") {
count = req.body.count;
res.json({ count: count });
} else {
res.status(400).json({ error: "Invalid count value" });
}
});
// Catch-all for other routes to serve the index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});