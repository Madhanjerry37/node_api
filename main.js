import express from "express";

const app = express()
const port = 6969;

app.get('/', (req, res) => {
    res.json({msg: "Hello students"})

});

app.listen(port, () =>{
    console.log(`This server is running at http://localhost:${port}`);
});