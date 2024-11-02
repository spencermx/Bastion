// server.js
const next = require('next')
const http = require('http')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleNextRequests = app.getRequestHandler()

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Basic request logger
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)

    // Custom routing example
    if (req.url === '/api/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify({ status: 'ok', timestamp: new Date() }))
    }

    // Let Next.js handle everything else
    return handleNextRequests(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
    console.log('> Mode:', dev ? 'development' : 'production')
  })
})
