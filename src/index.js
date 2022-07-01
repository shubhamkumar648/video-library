import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/Videocontext";
import { VideoactionProvider } from "./context/Videoaction-context";
import { AuthProvider } from "./context/Authcontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <VideoactionProvider>
            <App />
          </VideoactionProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
