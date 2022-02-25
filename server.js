const express = require('express')
const path = require('path')
const userRoutes = require('./routes/users')

const app = express()

// templates engines
app.set('view engine','pug')
app.set('views','views')


app.use(userRoutes)

app.listen(4000, () => {
    console.log('https://localhost:4000')
})