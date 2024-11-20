import express from "express";

const app = express()
const port = 6969;

app.get('/', (req, res) => {
    res.json({msg: "Hello students"})

});

//crud functionality of movies

//for reading
app.get("/movies", () =>{});

//for creating movies
app.get("/movies", () =>{});

//for updating movies
app.get("/movies/:id", () =>{});

//for deleting movies
app.get("/movies/:id", () =>{});

app.listen(port, () =>{
    console.log(`This server is running at http://localhost:${port}`);
});