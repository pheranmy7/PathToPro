const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
//const morgan = require('morgan')
const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

//Make sure they are well arranged by making your body_parser before your urls
app.use(express.json())  //body-parser
//app.use(morgan('tiny'))
app.use(cors())  
app.use('/app', routesUrls)  //routes_url for api
app.listen(4000, () => console.log("server is up and running"))