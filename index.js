
const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('This is a twitter request')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at Akhil Shandilya</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})