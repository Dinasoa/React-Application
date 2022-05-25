import ReactDOM from "react-dom/client";
import React from "react";

import "./App.css";
import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
import { Navbar } from "./modules/core/components/layout/Navbar";
import { Sidenav } from "./components/Sidenav";

function App() {
  return (
    <body class="sb-nav-fixed">
      <Navbar />
      <Sidenav />
    </body>
  );
}

export default App;
