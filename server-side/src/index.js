import { Server } from "socket.io";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const server = app.listen(process.env.PORT, () => {
  console.log(`app is listing at port ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_SIDE_URL,
  },
});

io.on("connection", (socket) => {
  socket.on("update", (data) => {
    socket.broadcast.emit("update", data);
  });

  socket.on("mouseDown", (data) => {
    socket.broadcast.emit("mouseDown", data);
  });
});
