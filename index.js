const express = require("express");
const connectDB = require("./src/config/db");
const PORT = 3009;
const app = express();
const user = require("./src/routes/User");
app.use(express.json());

connectDB();

app.use("/user", user);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
