import React from "react";
import ReactDOM from "react-dom/client";
import { Socket, io } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../server/communication.ts";
import App from "./App.tsx";
import "./index.css";


export const socket: Socket<
  ServerToClientEvents,
  ClientToServerEvents
> = io();

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
