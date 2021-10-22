import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UserProvider } from "./Components/Context/UserContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    
      <App className="root " />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
