import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingTopics from "../components/TrendingTopics";
import FeaturedStory from "../components/FeaturedStory";
import StoryGrid from "../components/StoryGrid";

import useStories from "../hooks/useStories";

function Home() {
  const {
    stories,
    loading,
    error,
  } = useStories("technology");

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Loading today's stories...
          </h1>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">

            <h2 className="text-3xl font-bold text-red-600">
              Something went wrong
            </h2>

            <p className="mt-4 text-gray-500">
              {error}
            </p>

          </div>
        </main>
      </>
    );
  }

  const featuredStory = stories[0];
  const latestStories = stories.slice(1);

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <TrendingTopics />

      <FeaturedStory story={featuredStory} />

      <StoryGrid stories={latestStories} />

    </div>
  );
}

export default Home;