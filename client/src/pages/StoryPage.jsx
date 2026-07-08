import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getTechQuestInsight } from "../services/insightService";

function StoryPage() {
  const { state } = useLocation();
  const story = state?.story;

  const [insight, setInsight] = useState(null);
  const [loadingInsight, setLoadingInsight] = useState(true);

  useEffect(() => {
    async function loadInsight() {
      if (!story) return;

      setLoadingInsight(true);

      const data = await getTechQuestInsight(story);

      setInsight(data);
      setLoadingInsight(false);
    }

    loadInsight();
  }, [story]);

  if (!story) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-700">
            Story not found.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}

        <section className="mb-10">

          <p className="uppercase tracking-widest text-purple-600 font-semibold">
            🧠 TechQuest Brief
          </p>

          <h1 className="text-5xl font-extrabold mt-3 leading-tight">
            {story.title}
          </h1>

          <div className="flex gap-4 mt-5 text-gray-500 text-sm">
            <span>{story.source}</span>
            <span>•</span>
            <span>{story.readTime} min read</span>
          </div>

        </section>

        {/* Story Image */}

        <img
          src={story.image}
          alt={story.title}
          className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
        />

        {/* TechQuest Insight */}

        <section className="bg-white rounded-3xl shadow-md mt-12 p-8">

          <h2 className="text-3xl font-bold mb-8">
            🧠 TechQuest Insight
          </h2>

          {loadingInsight ? (
            <p className="text-gray-500">
              Generating your TechQuest Insight...
            </p>
          ) : (
            <>
              {/* What Happened */}

              <div className="mb-10">

                <h3 className="text-xl font-bold mb-3">
                  📌 What happened?
                </h3>

                <p className="text-gray-700 leading-8">
                  {insight.whatHappened}
                </p>

              </div>

              {/* Why It Matters */}

              <div>

                <h3 className="text-xl font-bold mb-3">
                  🌍 Why this matters
                </h3>

                <p className="text-gray-700 leading-8">
                  {insight.whyItMatters}
                </p>

              </div>
            </>
          )}

        </section>

        {/* Quick Check */}

        <section className="bg-white rounded-3xl shadow-md mt-8 p-8">

          <h2 className="text-3xl font-bold mb-8">
            💡 Quick Check
          </h2>

          {loadingInsight ? (
            <p className="text-gray-500">
              Preparing questions...
            </p>
          ) : (
            insight.quickCheck.map((question, index) => (
              <div
                key={index}
                className="mb-10"
              >
                <h3 className="text-xl font-semibold mb-5">
                  {index + 1}. {question.question}
                </h3>

                <div className="space-y-3">

                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className="w-full text-left px-5 py-3 rounded-xl border border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition"
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  ))}

                </div>

              </div>
            ))
          )}

        </section>

        {/* Read Full Article */}

        <div className="mt-10 text-center">

          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Read Full Article →
          </a>

        </div>

      </main>
    </>
  );
}

export default StoryPage;