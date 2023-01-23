import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="hero">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
