const express = require("express")
const bodyParser = require("body-parser")
// const cors = require("cors")
const {profileRouter} = require("./app")

// create the app
const app = express()

// use cors
// app.use(cors())

// use body-parser
app.use(bodyParser.json())

//use Routers 
app.use("/", profileRouter)

//Listen
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))