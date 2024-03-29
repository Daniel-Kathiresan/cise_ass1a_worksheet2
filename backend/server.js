const express = require("express")

const articles = require("./dummydata/articles")

const server = express();

const dotenv = require("dotenv");
dotenv.config;
const PORT = process.env.PORT || 5000;

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
})

server.listen(PORT, console.log("server is working and listening to port 5000"))