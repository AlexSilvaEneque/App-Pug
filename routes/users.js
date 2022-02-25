const express = require('express')
const path = require('path')
const UserController = require('../controllers/users')

function views(document) {
    return path.join(__dirname,"../","views",document)
}

const router = express.Router()

const userController = new UserController()

router.get('/', async (req, res) => {
    let users = await userController.readAll()
    return res.render("index",{users:users, tittle:'Users'})
})

module.exports = router