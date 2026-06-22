import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import MartialArts from "@/pages/MartialArts";
import Sects from "@/pages/Sects";
import Stories from "@/pages/Stories";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/martial-arts" element={<MartialArts />} />
        <Route path="/sects" element={<Sects />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}
