// Dependencies 
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

// Dev API server port
const port = normalizePort(process.env.PORT || "9876"); 
app.set("port", port);

const server = http.createServer(app);
server.on("listening", onListening);
server.listen(port);