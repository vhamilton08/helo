require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const Ctrl = require('./controller')

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 72},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err))

app.post('/auth/dashboard', Ctrl.register)
app.post('/auth/login', Ctrl.login)
app.post('/auth/logout', Ctrl.logout)

app.get('/api/posts', Ctrl.getPosts)
app.get('/api/posts/:id', Ctrl.getPost)
app.post('/api/createpost/:id', Ctrl.createPost)
app.delete('/api/post/:id', Ctrl.deletePost)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))