import Navbar from "../components/Navbar";
import aboutTitle from "../assets/images/about-title.png";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-28 text-center">

          <img
            src={aboutTitle}
            alt="About TechQuest"
            className="mx-auto w-full max-w-5xl"
          />

          <p className="mt-12 max-w-5xl mx-auto text-3xl leading-relaxed text-slate-800">
            TechQuest is built for curious students and young professionals
            who want to stay ahead in technology, careers and innovation-
            without spending hours scrolling through dozens of news websites.
          </p>

        </section>

        {/* Mission Cards */}
        <section className="max-w-6xl mx-auto grid gap-8 px-8 pb-32 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-6xl">🎓</div>

            <h2 className="mt-6 text-3xl font-bold">
              Learn
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Discover breakthroughs in AI, technology,
              universities and research that actually matter.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-6xl">💼</div>

            <h2 className="mt-6 text-3xl font-bold">
              Grow
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Stay updated with internships,
              graduate programmes,
              scholarships and career opportunities.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-6xl">🚀</div>

            <h2 className="mt-6 text-3xl font-bold">
              Explore
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              We filter out the noise so you can focus on the
              stories that help you build your future.
            </p>

          </div>

        </section>

        {/* Story Behind TechQuest */}
        <section className="max-w-6xl mx-auto px-8 pb-32">

          <div className="rounded-3xl bg-white p-14 shadow-lg">

            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 text-center">
              The Story Behind TechQuest
            </h2>

            <p className="mt-10 text-xl md:text-2xl leading-relaxed text-slate-700">
              As a computer science student, I found myself constantly jumping
              between different websites just to stay informed. AI breakthroughs
              were on one platform, internships were posted somewhere else,
              university research lived on another website, and startup news was
              scattered across countless blogs. Keeping up with technology and
              career opportunities became overwhelming, and it was easy to miss
              valuable information simply because there was too much of it.
            </p>

            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-700">
              That's where the idea for TechQuest came from. I wanted to build
              one place where students and young professionals could discover
              the stories that actually matter without spending hours searching
              the internet. Instead of reading everything, TechQuest filters the
              noise and highlights the updates that can help people learn, grow
              and prepare for their careers.
            </p>

            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-700">
              Every day, TechQuest automatically gathers news from trusted
              sources, filters articles using a custom relevance engine, and
              uses AI to generate easy-to-understand explanations,
              career-focused insights and interactive quizzes. The goal isn't
              simply to deliver news-it's to make learning from the latest
              developments in technology engaging, accessible and genuinely
              useful.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2">

              {/* Problem */}
              <div className="rounded-2xl bg-slate-50 p-8">

                <h3 className="text-3xl font-bold text-slate-900">
                  🎯 The Problem
                </h3>

                <p className="mt-5 text-lg leading-9 text-slate-700">
                  Students and graduates often miss internships,
                  graduate programmes, AI breakthroughs, startup
                  funding and university research because the
                  information is spread across too many websites.
                  Finding what truly matters takes time and effort,
                  making it easy to overlook valuable opportunities.
                </p>

              </div>

              {/* Solution */}
              <div className="rounded-2xl bg-slate-50 p-8">

                <h3 className="text-3xl font-bold text-slate-900">
                  💡 The Solution
                </h3>

                <ul className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                  <li>✅ Daily automated news collection</li>
                  <li>✅ Custom relevance engine</li>
                  <li>✅ AI-generated summaries</li>
                  <li>✅ Career-focused insights</li>
                  <li>✅ Interactive quizzes</li>
                  <li>✅ One place for the stories that matter most</li>
                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* Footer */}
        <section className="pb-32 text-center">

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900">
            Stay Curious. Keep Exploring.
          </h2>

          <p className="mt-6 text-2xl text-slate-700">
            Every great career starts with curiosity.
          </p>

        </section>

      </main>
    </>
  );
}