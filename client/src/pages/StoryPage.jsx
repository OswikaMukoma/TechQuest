import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function StoryPage() {
  const { state } = useLocation();
  const story = state?.story;

  const [selectedAnswers, setSelectedAnswers] = useState({});

  function chooseAnswer(questionIndex, optionIndex) {
    if (selectedAnswers[questionIndex] !== undefined) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  }

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Story not found.
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Hero */}

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

          {!story.what_happened ? (

            <div className="space-y-4">

              <p className="text-lg">
                Today's insight isn't available yet.
              </p>

              <p className="text-gray-600">
                Please check back after the next daily update.
              </p>

            </div>

          ) : (

            <>

              {/* What Happened */}

              <div className="mb-10">

                <h3 className="text-2xl font-semibold mb-3">
                  📌 What Happened
                </h3>

                <p className="text-gray-700 leading-8 whitespace-pre-line">
                  {story.what_happened}
                </p>

              </div>

              {/* Career Connection */}

              <div className="mb-10">

                <h3 className="text-2xl font-semibold mb-3">
                  💼 Career Connection
                </h3>

                <p className="text-gray-700 leading-8 whitespace-pre-line">
                  {story.why_it_matters}
                </p>

              </div>

              {/* Quick Check */}

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  📝 Quick Check
                </h3>

                <div className="space-y-8">

                  {story.quick_check?.map((question, questionIndex) => {

                    const selected =
                      selectedAnswers[questionIndex];

                    const answered =
                      selected !== undefined;

                    return (

                      <div
                        key={questionIndex}
                        className="border rounded-2xl p-6"
                      >

                        <h4 className="font-semibold text-lg mb-5">
                          {questionIndex + 1}. {question.question}
                        </h4>

                        <div className="space-y-3">

                          {question.options.map((option, optionIndex) => {

                            let buttonClass =
                              "w-full text-left border rounded-xl px-4 py-3 transition ";

                            if (!answered) {

                              buttonClass +=
                                "hover:bg-gray-100";

                            } else {

                              if (
                                optionIndex ===
                                question.correctAnswer
                              ) {

                                buttonClass +=
                                  "bg-green-100 border-green-500";

                              } else if (
                                optionIndex === selected
                              ) {

                                buttonClass +=
                                  "bg-red-100 border-red-500";

                              } else {

                                buttonClass +=
                                  "opacity-60";

                              }

                            }

                            return (

                              <button
                                key={optionIndex}
                                disabled={answered}
                                onClick={() =>
                                  chooseAnswer(
                                    questionIndex,
                                    optionIndex
                                  )
                                }
                                className={buttonClass}
                              >
                                {option}
                              </button>

                            );

                          })}

                        </div>

                        {answered && (

                          <div className="mt-5 rounded-xl bg-slate-50 p-4 border">

                            {selected === question.correctAnswer ? (

                              <p className="font-semibold text-green-700 mb-2">
                                ✅ Correct!
                              </p>

                            ) : (

                              <p className="font-semibold text-red-700 mb-2">
                                ❌ Incorrect
                              </p>

                            )}

                            <p className="text-gray-700">
                              {question.explanation}
                            </p>

                          </div>

                        )}

                      </div>

                    );

                  })}

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