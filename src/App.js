import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Catalog from "./containers/Catalog";
import Cart from "./containers/Cart";
import ItemPage from "./containers/ItemPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="hero">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ItemPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
