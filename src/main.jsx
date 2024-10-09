import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";

import { BrowserRouter } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <App />
      <Footer></Footer>
    </BrowserRouter>
  </StrictMode>
);
