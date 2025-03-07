require("dotenv").config();  // Load environment variables

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is undefined

app.get("/", (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

const routes = require("./src/routes");
app.use("/api", routes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



