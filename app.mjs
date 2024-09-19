import express from "express";
import fetch from "node-fetch";

const PORT = 3000;
const app = express();

const url = "https://www.omdbapi.com/?t=Power+Book+II&apikey=b9b186b5"

app.get("/movie", (req, res) => {

    fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send("Error while trying to fetch data! :-(");
        console.log("Error while trying to fetch data! :-(");
    })
})


app.listen(PORT, () => {
    console.log("MoviewDB server is up and running on port ", PORT);
})

