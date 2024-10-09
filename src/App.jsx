import "./App.css";
import {Routes,Route} from 'react-router-dom'
import * as $ from "jquery";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path = "/blog" element = {<BlogPage />} />

</Routes>
  );
}

export default App;
