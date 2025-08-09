require("dotenv").config()
const app = require("express")();

app.get("/", (req, res) => {
    console.log("Hello!");
    res.send("Hello!");
});


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});