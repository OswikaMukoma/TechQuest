import heroImage from "../assets/images/hero-journey.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-8 py-12 lg:flex-row lg:py-20">

        {/* LEFT SIDE */}
        <div className="max-w-xl text-center lg:text-left">

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Your Journey to
            <br />
            <span className="text-purple-600">
              Smarter Every Day!
            </span>
          </h1>

          

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Discover amazing topics, learn through fun quizzes,
            and level up your knowledge one quest at a time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <button className="rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-purple-700">
              Start Your Journey
            </button>

            <button className="rounded-2xl border-2 border-purple-600 px-8 py-4 text-lg font-semibold text-purple-600 transition duration-300 hover:bg-purple-50">
              Explore Topics
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Brain walking along a knowledge journey"
            className="w-full max-w-3xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;