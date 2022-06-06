import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/Videocontext";
import { VideoactionProvider } from "./context/Videoaction-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <VideoactionProvider>
  <VideoProvider>
      <App />
  </VideoProvider>
  </VideoactionProvider>

    </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
