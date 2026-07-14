import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-journey.png";

function Hero() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-gradient-to-b from-white to-purple-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 px-8 py-16 lg:flex-row">

          {/* LEFT */}

          <div className="max-w-2xl">

            <span className="inline-block rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
              Hey there! Welcome to TechQuest
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900 lg:text-7xl">
              Your next
              <span className="text-purple-600"> opportunity </span>
              starts here.
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              TechQuest helps students and young professionals discover
              breakthroughs in AI, internships, graduate programmes,
              startups and technology — without the endless scrolling.
            </p>

            <Link
              to="/explore"
              className="mt-12 inline-flex rounded-2xl bg-purple-600 px-10 py-5 text-lg font-bold text-white transition hover:scale-105 hover:bg-purple-700"
            >
              🚀 Start Exploring
            </Link>

          </div>

          {/* RIGHT */}

          <img
            src={heroImage}
            alt="TechQuest"
            className="w-full max-w-2xl"
          />

        </div>
      </section>

      {/* TODAY'S QUEST */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12 text-center">

            <h2 className="text-5xl font-black">
              🎯 Today's Quest
            </h2>

            <p className="mt-5 text-xl text-gray-500">
              Explore curated stories that actually matter.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-white shadow-xl">
              <div className="text-5xl">🤖</div>

              <h3 className="mt-6 text-2xl font-bold">
                AI
              </h3>

              <p className="mt-4 opacity-90">
                Discover the latest breakthroughs in artificial intelligence.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 p-8 text-white shadow-xl">
              <div className="text-5xl">💼</div>

              <h3 className="mt-6 text-2xl font-bold">
                Careers
              </h3>

              <p className="mt-4 opacity-90">
                Graduate jobs, internships and hiring news.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white shadow-xl">
              <div className="text-5xl">🎓</div>

              <h3 className="mt-6 text-2xl font-bold">
                Students
              </h3>

              <p className="mt-4 opacity-90">
                Scholarships, universities and research opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white shadow-xl">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-6 text-2xl font-bold">
                Startups
              </h3>

              <p className="mt-4 opacity-90">
                Funding, founders and the next big ideas.
              </p>
            </div>

          </div>

        </div>
      </section>
     {/* FINAL CTA */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-20 text-center text-white">

          <h2 className="text-5xl font-black">
            Ready for today's quest?
          </h2>

          <p className="mt-8 text-xl opacity-90">
            Your next opportunity could be one click away.
          </p>

          <Link
            to="/explore"
            className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-lg font-bold text-purple-700 transition hover:scale-105"
          >
            Explore Stories →
          </Link>

        </div>

      </section>
      {/* WHY TECHQUEST */}

      <section className="bg-purple-50 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-5xl font-black">
            Why TechQuest?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Most news platforms try to show you everything.
            TechQuest filters out the noise so you can focus on
            opportunities, technology and innovations that can shape
            your future.
          </p>

        </div>

      </section>

      

    </main>
  );
}

export default Hero;