const express = require('express')
require('dotenv').config()

const workoutRoutes = require('./routes/workouts')
// Express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts',workoutRoutes)

// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 4000!')
})