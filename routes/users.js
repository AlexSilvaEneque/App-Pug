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

router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    let user = await userController.readById(id)    
    return res.render('details',{users: user, tittle: 'Details User'})
})


router.get('/user/edit/:id', async (req, res) => {
    const id = req.params.id
    let dataUser = await userController.readById(id)
    return res.render('edit',{user:dataUser, tittle: 'Edit User'})
})

router.get('/register', (req, res) => {
    return res.render('register',{tittle: 'Register User'})
})

router.post('/save', async (req, res) => {
    let data = req.body
    let user = await userController.create(data)
    if (user.success) {
        return res.redirect('/')
    } else {
        return res.render('register',{tittle: 'Error al registrar', error:true, message: user.error, data: data})
    }
})

module.exports = router