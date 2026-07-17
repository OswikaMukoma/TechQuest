import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-journey.png";

function Hero() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-gradient-to-b from-white to-purple-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-12 md:px-8 md:py-16 lg:flex-row lg:gap-16">

          {/* LEFT */}

          <div className="max-w-2xl text-center lg:text-left">

            <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700 md:px-5 md:text-sm">
              Hey there! Welcome to TechQuest
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:mt-8 lg:text-7xl">
              Your next
              <span className="text-purple-600"> opportunity </span>
              starts here.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl lg:mt-8 lg:text-2xl lg:leading-9">
              TechQuest helps students and young professionals discover
              breakthroughs in AI, internships, graduate programmes,
              startups and technology — without the endless scrolling.
            </p>

            <Link
              to="/explore"
              className="mt-8 inline-flex rounded-2xl bg-purple-600 px-8 py-4 text-base font-bold text-white transition hover:scale-105 hover:bg-purple-700 lg:mt-12 lg:px-10 lg:py-5 lg:text-lg"
            >
              🚀 Start Exploring
            </Link>

          </div>

          {/* RIGHT */}

          <img
            src={heroImage}
            alt="TechQuest"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
          />

        </div>
      </section>

      {/* TODAY'S QUEST */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-black md:text-5xl">
              🎯 Today's Quest
            </h2>

            <p className="mt-4 text-lg text-gray-500 md:mt-5 md:text-2xl">
              Explore curated stories that actually matter.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

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

      <section className="py-16 md:py-24">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-14 text-center text-white md:px-10 md:py-20">

          <h2 className="text-3xl font-black md:text-5xl">
            Ready for today's quest?
          </h2>

          <p className="mt-6 text-lg opacity-90 md:mt-8 md:text-xl">
            Your next opportunity could be one click away.
          </p>

          <Link
            to="/explore"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-base font-bold text-purple-700 transition hover:scale-105 md:mt-10 md:px-10 md:py-5 md:text-lg"
          >
            Explore Stories →
          </Link>

        </div>

      </section>

      {/* WHY TECHQUEST */}

      <section className="bg-purple-50 py-16 md:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">

          <h2 className="text-3xl font-black md:text-5xl">
            Why TechQuest?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600 md:mt-8 md:text-xl md:leading-9">
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