const port = 3000

const express = require('express')
const server = express()

server.use('/public', express.static('assets'))

server.get('/', (req, res) => {
    res.send('This is GET on /')
})

server.get('/test', (req, res) => {
    let obj = {
        method: req.method,
        url: req.url
    }
    res.send(obj)
})

server.post('/',  (req, res) => {
    res.send('This is POST on /')
})

server.listen(port, () => {
    console.log(`server is running on port:${port}...`)
})