import HighlightCard from "./HighlightCard";
import useHighlights from "../hooks/useHighlights";

function TodayHighlights() {
  const { highlights, loading } = useHighlights();

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-8 mt-16">
        <p className="text-center text-gray-500">
          Loading today's highlights...
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 mt-16">

      <h2 className="text-4xl font-bold mb-10">
        🔥 Today's Highlights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {highlights.map((highlight) => (
          <HighlightCard
            key={highlight.category}
            highlight={highlight}
          />
        ))}
      </div>

    </section>
  );
}

export default TodayHighlights;