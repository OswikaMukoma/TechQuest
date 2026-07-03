import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingTopics from "../components/TrendingTopics";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrendingTopics />
    </div>
  );
}

export default Home;