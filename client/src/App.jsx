import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import StoryPage from "./pages/StoryPage";
import About from "./pages/About";

import { testSupabase } from "./testSupabase";

function App() {
  useEffect(() => {
    testSupabase();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;