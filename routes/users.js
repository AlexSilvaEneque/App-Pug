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
    let userData = await userController.readById(id)
    let userSend = userData[0]
    return res.render('details',{user: userSend, tittle: 'Details User'})
})


router.get('/user/edit/:id', async (req, res) => {
    let has = true
    const id = req.params.id
    let dataUser = await userController.readById(id)
    let user = dataUser[0]

    if (user.genero == 'm' || user.genero == 'M') {
        has = false
    }

    return res.render('edit',{user:user, tittle: 'Edit User', happens: has})
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

router.post('/update/:id', async (req, res) => {
    let id = req.params.id
    let data = req.body
    let user = await userController.update(id,data)
    return res.redirect('/')
})

router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id
    let userDelete = await userController.delete(id)
    let users = await userController.readAll()
    return res.json(users)
})

module.exports = router