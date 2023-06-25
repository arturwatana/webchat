import { io } from "socket.io-client";

const socket = io("https://webchat-backend.vercel.app");
export default socket;
