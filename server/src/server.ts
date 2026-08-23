import http from "http";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

const PORT = process.env.PORT || 3003;

const server = http.createServer(app);

async function startServer() {
  // data base coneection TODO

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}......`);
  });
}

startServer();
