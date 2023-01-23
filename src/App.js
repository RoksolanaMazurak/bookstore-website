import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Catalog from "./containers/Catalog";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="hero">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
