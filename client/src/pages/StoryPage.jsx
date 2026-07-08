import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getTechQuestInsight } from "../services/insightService";

function StoryPage() {
  const { state } = useLocation();
  const story = state?.story;

  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsight() {
      if (!story) return;

      setLoading(true);

      const result = await getTechQuestInsight(story);

      setInsight(result);
      setLoading(false);
    }

    loadInsight();
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Story not found.</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Hero Image */}

        <img
          src={story.image}
          alt={story.title}
          className="w-full h-96 object-cover rounded-3xl"
        />

        {/* Title */}

        <h1 className="text-5xl font-bold mt-8 leading-tight">
          {story.title}
        </h1>

        {/* Meta */}

        <div className="flex flex-wrap gap-6 text-gray-500 mt-4 mb-12">

          <span>{story.source}</span>

          <span>{story.readTime} min read</span>

        </div>

        {/* Today's Brief */}

        <section className="bg-white rounded-3xl shadow-md p-8 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            📰 Today's Brief
          </h2>

          {loading ? (

            <div className="py-12 text-center">

              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>

              <p className="text-lg font-medium">
                🧠 TechQuest is preparing today's insight...
              </p>

            </div>

          ) : !insight ? (

            <div className="space-y-4">

              <p className="text-lg">
                Today's insight isn't available right now.
              </p>

              <p className="text-gray-600">
                You can still read the original article below.
              </p>

            </div>

          ) : (

            <>

              {/* What Happened */}

              <div className="mb-10">

                <h3 className="text-2xl font-semibold mb-3">
                  📌 What Happened
                </h3>

                <p className="text-gray-700 leading-8">
                  {insight.whatHappened}
                </p>

              </div>

              {/* Career Connection */}

              <div className="mb-10">

                <h3 className="text-2xl font-semibold mb-3">
                  💼 Career Connection
                </h3>

                <p className="text-gray-700 leading-8">
                  {insight.whyItMatters}
                </p>

              </div>

              {/* Quick Check */}

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  📝 Quick Check
                </h3>

                <div className="space-y-8">

                  {insight.quickCheck?.map((question, index) => (

                    <div
                      key={index}
                      className="border rounded-2xl p-6"
                    >
                      <h4 className="font-semibold mb-4">
                        {index + 1}. {question.question}
                      </h4>

                      <div className="space-y-3">

                        {question.options.map((option, optionIndex) => (

                          <button
                            key={optionIndex}
                            className="w-full text-left border rounded-xl px-4 py-3 hover:bg-gray-100 transition"
                          >
                            {option}
                          </button>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </>

          )}

        </section>

        {/* Read Full Story */}

        <div className="flex justify-center">

          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            🌍 Read Full Story
          </a>

        </div>

      </main>
    </>
  );
}

export default StoryPage;