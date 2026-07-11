import Navbar from "../components/Navbar";
import aboutTitle from "../assets/images/about-title.png";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-20 text-center">

          <img
            src={aboutTitle}
            alt="About TechQuest"
            className="mx-auto w-full max-w-4xl"
          />

          <p className="mt-10 text-xl leading-9 text-slate-600">
            TechQuest is built for curious students and young professionals
            who want to stay ahead in technology, careers and innovation—
            without spending hours scrolling through dozens of news websites.
          </p>

        </section>

        {/* Cards */}
        <section className="max-w-6xl mx-auto grid gap-8 px-8 pb-24 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-5xl">
              🎓
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Learn
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Discover breakthroughs in AI, technology,
              universities and research that actually matter.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-5xl">
              💼
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Grow
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Stay updated with internships,
              graduate programmes,
              scholarships and career opportunities.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-5xl">
              🚀
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Explore
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We filter out the noise so you can focus on the
              stories that help you build your future.
            </p>

          </div>

        </section>

        {/* Footer Message */}
        <section className="pb-24 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Stay Curious. Keep Exploring.
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Every great career starts with curiosity.
          </p>

        </section>

      </main>
    </>
  );
}