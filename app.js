const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node App Deployed by Jenkins 🚀");
});

const PORT = 3000;

// IMPORTANT: bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
