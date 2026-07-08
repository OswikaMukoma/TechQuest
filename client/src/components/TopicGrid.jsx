import topics from "../data/topics";

function TopicGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="rounded-3xl bg-white p-6 shadow-md"
        >
          <h2 className="text-2xl font-bold">
            {topic.icon} {topic.title}
          </h2>

          <p className="mt-3 text-slate-600">
            {topic.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TopicGrid;