import { useState } from "react";

import Navbar from "../components/Navbar";
import CategoryChips from "../components/CategoryChips";
import FeaturedStory from "../components/FeaturedStory";
import StoryGrid from "../components/StoryGrid";

import useStories from "../hooks/useStories";

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("technology");

  const {
    stories,
    loading,
    error,
  } = useStories(selectedCategory);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#fafafa] flex items-center justify-center">
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
        <main className="min-h-screen bg-[#fafafa] flex items-center justify-center">
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
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fafafa]">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 pt-20 text-center">

          <h1 className="text-6xl font-extrabold text-slate-900">
            Discover
          </h1>

          <p className="mt-5 text-xl text-gray-500 max-w-3xl mx-auto">
            Stay curious. Stay informed. Explore the latest news in AI,
            careers, universities, business, technology, politics,
            science and more.
          </p>

        </section>

        {/* Search */}

        {/* Categories */}
        

        {/* Featured Story */}
        <FeaturedStory story={featuredStory} />

        {/* Story Grid */}
        <StoryGrid stories={latestStories} />

      </main>
    </>
  );
}

export default Explore;