import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import StoryPage from "./pages/StoryPage";
import About from "./pages/About";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/explore" element={<Explore />} />

      <Route path="/story/:id" element={<StoryPage />} />

      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;