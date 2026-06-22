import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import MartialArts from "@/pages/MartialArts";
import Sects from "@/pages/Sects";
import Stories from "@/pages/Stories";

export default function App() {
  return (
    <Router>
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
