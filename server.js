const express = require('express')
const {json} = require("express")
const app = express()
app.use(json())

const envelopesRoutes = require('./routes/envelopes')

app.use("/envelopes", envelopesRoutes)

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Server running at port 3000")
})

