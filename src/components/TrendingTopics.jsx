import TopicCard from "./TopicCard";

function TrendingTopics() {
  return (
    <section className="bg-white px-8 py-20">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-bold text-slate-900">
          🔥 Explore Trending Topics
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          What's hot and happening in the world of knowledge.
        </p>

        <div className="mt-12 flex items-center gap-6 overflow-x-auto pb-4">

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-3xl hover:bg-purple-200">
            ←
          </button>

          <TopicCard
            emoji="🤖"
            title="Artificial Intelligence"
            badge="Hot"
            badgeColor="bg-red-100 text-red-600"
            time="2 min"
          />

          <TopicCard
            emoji="🛡️"
            title="Cybersecurity"
            badge="Hot"
            badgeColor="bg-red-100 text-red-600"
            time="3 min"
          />

          <TopicCard
            emoji="🚀"
            title="Space Exploration"
            badge="New"
            badgeColor="bg-green-100 text-green-700"
            time="4 min"
          />

          <TopicCard
            emoji="🧬"
            title="Biotechnology"
            badge="New"
            badgeColor="bg-green-100 text-green-700"
            time="3 min"
          />

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-3xl hover:bg-purple-200">
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default TrendingTopics;