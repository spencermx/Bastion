  // "scripts": {
  //   "dev": "next dev",
  //   "build": "next build",
  //   "start": "next start",
  //   "lint": "next lint"
  // },

// server.js
const next = require("next");
const http = require("http");

// Add startup logging
console.log("=====================================");
console.log("Server Starting");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("Current Directory:", process.cwd());
console.log("Directory Contents:", require("fs").readdirSync("."));
console.log("=====================================");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handleNextRequests = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Log every request
    console.log([${new Date().toISOString()}] ${req.method} ${req.url});

    // Custom routing example
    if (req.url === "/api/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "ok", timestamp: new Date() }));
    }

    // Create WebSocket server without attaching it to the HTTP server
    const wss = new WebSocket.Server({ noServer: true });

    // Handle WebSocket connection
    wss.on("connection", (ws) => {
      console.log("A client connected");
      ws.send("Welcome to the server!");
    });

    // Handle upgrade requests manually
    server.on("upgrade", (request, socket, head) => {
      // Get pathname directly from request.url
      const pathname = request.url;

      if (pathname === "/ws/chat") {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit("connection", ws, request);
        });
      } else {
        // Let Next.js handle its own WebSocket connections
        socket.destroy();
      }
    });

    return handleNextRequests(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("=====================================");
    console.log(Server running on port ${PORT});
    console.log("Mode:", dev ? "development" : "production");
    console.log("=====================================");
  });
});

// Add error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
});
