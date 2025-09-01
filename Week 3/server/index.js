
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs"); // This is Filing System
const path = require("path");

const recipesFilePath = path.join(__dirname, 'recipes.json'); //__dirname is a built-in variable that tells us where we are rn
 
app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.get("/recipes", (req, res) => {
    // reading the json file to get the recipes
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        // Were reading the file through the filepath, encoding is added (utf-8)
        // the err vaeiable holds errors if there are any
        // the data variable holds the data read in from the file
        // We need to parse the json data to turn it into plain JS
        const recipes = JSON.parse(data);
        res.json(recipes);
    })
});

app.post("/recipes", (req, res) => {
    res.send("The new recipe is added")
});

app.listen(port, () => {
    console.log("The server is running on http://localhost:", port)
});

