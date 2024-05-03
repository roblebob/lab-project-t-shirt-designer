import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DesignPage from "./pages/DesignPage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <main className="app transition-all ease-in">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<DesignPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
