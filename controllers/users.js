const db = require('../database/database')

class UserController {
    async readAll() {
        const users = await db.query('SELECT * FROM users')
        return users
    }
    
    async readById(id) {
        const user = await db.query('SELECT * FROM users WHERE id = ?', [id])
        return user
    }
    
    async create(data) {
        const newUser = await db.insert('users',data)
        return newUser
    }
    
    async update(id, data) {
        const editUser = await db.query('UPDATE users SET ? WHERE id = ?',[data, id])
        return editUser
    }
    
    async delete(id) {
        const deleteUser = await db.query('DELETE FROM users WHERE id = ?',[id])
        return deleteUser
    }
}

module.exports = UserController