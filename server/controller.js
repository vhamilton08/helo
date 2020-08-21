const bycrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(username, password)
        const existingUser = await db.check_user(username)
        if(existingUser[0]){
            return res.status(409).send("Username is taken")
        }
        const salt = bycrypt.genSaltSync(15)
        const hash = bycrypt.hashSync(password, salt)
        const [newUser] = await db.create_user([username, hash])
        req.session.user = {
            id: newUser.id,
        }
        res.status(200).send(newUser.username)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.check_user(username)
        if(!user[0]) {
            return res.status(401).send("Incorrect username")
        } else {
            const authenticated = bycrypt.compareSync(password, user[0].password)
            if(authenticated){
                req.session.user = {
                    id: user[0].id,
                
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send("Incorrect username or password")
            }
        }

    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200).send(req.session.user)
    
    },

    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const {userposts, search} = req.query
        const getposts = await db.search_Posts([id])
        if(userposts[0] & search) {
            return res.status(200).send(res.getPosts.data) 
        } else if(!userposts[0] & !search) {
            return res.status(200).send(res.getPosts)
        } else {
            (!userposts & search) {
                return res.send(res.getPosts)
            }
        }
    }
    }  