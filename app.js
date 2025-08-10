require("dotenv").config()
const connectToDatabase = require("./database");
const app = require("express")();

connectToDatabase();



app.get("/", (req, res) => {
    console.log("Hello!");
    res.send("Hello!");
});


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});