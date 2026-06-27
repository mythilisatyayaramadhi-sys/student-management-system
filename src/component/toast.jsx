import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
{
  "name": "lost-and-found",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "json-server": "^0.17.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "server": "json-server --watch db.json --port 3001",
    "build": "react-scripts build"
  },
  "proxy": "http://localhost:3001"
}