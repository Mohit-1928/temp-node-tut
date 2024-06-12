const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    }
    else if (req.url === '/about') {
        // Blocking code !!!!
        for (i = 0; i < 1000; i++) {
            for (j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('This is our small history')

    }
    else {
        res.end(`
            <a href = "/">Home</a>
            `)
    }
})

server.listen(5000, () => {
    console.log('server listening on port 5000...')
})