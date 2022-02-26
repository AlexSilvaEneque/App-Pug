const express = require('express')
const path = require('path')
const { port } = require('./config')
const userRoutes = require('./routes/users')

const app = express()

// templates engines
app.set('view engine','pug')
app.set('views','views')


app.use(express.static(path.join(__dirname,"static")))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(userRoutes)

app.listen(port, () => {
    console.log('http://localhost:'+port)
})