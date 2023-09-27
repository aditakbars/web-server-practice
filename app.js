'use strict'

const express = require('express')

const PORT = 8000
const HOST = 'localhost'

const app = express()
app.get('/', (req, res) => {
    res.send('Aditya Akbar Subakti\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)