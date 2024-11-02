// server.js
const next = require('next')
const http = require('http')

// Create the Next.js app
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handleNextRequests = app.getRequestHandler()

// Wait for Next.js to be ready
app.prepare().then(() => {
  // Create a basic HTTP server
  const server = http.createServer((req, res) => {
    handleNextRequests(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
