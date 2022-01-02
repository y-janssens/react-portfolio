import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Details2 from "./components/Details2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="img:id" element={<Details />} />
          <Route path="vid:id" element={<Details2 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
