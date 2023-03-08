// Create express server
const express = require('express')

// setup actual server
const app = express()

// Tell application to use view engine/ejs
app.set('view engine', 'ejs')

// setup routes
app.get('/', (req, res) => {
    console.log("Here")
    res.render('index')
})

// import user routes
const userRouter = require('./routes/users')

// Link up the user routes
app.use('/users', userRouter)

// make the server run
app.listen(3000)