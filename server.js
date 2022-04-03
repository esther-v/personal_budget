const express = require('express')
const {json} = require("express")
const app = express()
app.use(json())


app.listen(3000, () => {
    console.log("Server running at port 3000")
})

app.get("/", (req, res) => {
    return res.send("Hello World");
})
