import { Server } from "socket.io";
import { app } from "./app.js";



const server = app.listen(process.env.PORT, () => {
  console.log(`app is listing at port ${process.env.PORT}`);
});

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("update", (data) => {
    socket.broadcast.emit("update", data);
  });

  socket.on("mouseDown", (data) => {
    socket.broadcast.emit("mouseDown", data);
  });
});
