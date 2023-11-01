import io from "socket.io-client";
let socket: any;

const connectSocket = (id: string) => {
  socket = io("http://localhost:3000", {
    query: {
      userId: id,
    },
  });
};

export { connectSocket, socket };
