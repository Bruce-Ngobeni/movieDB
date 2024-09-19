import express from "express";
import fetch from "node-fetch";

const PORT = 3000;
const app = express();


app.listen(PORT, () => {
    console.log("MoviewDB server is up and running on port ", PORT);
})

