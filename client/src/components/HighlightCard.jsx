import { Link } from "react-router-dom";

function HighlightCard({ highlight }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      <img
        src={highlight.featured?.image}
        alt={highlight.featured?.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-2 mb-4">

          <span className="text-3xl">
            {highlight.icon}
          </span>

          <h2 className="text-2xl font-bold">
            {highlight.name}
          </h2>

        </div>

        <h3 className="text-xl font-semibold line-clamp-2">
          {highlight.featured?.title}
        </h3>

        <p className="mt-3 text-gray-600 line-clamp-3">
          {highlight.featured?.summary}
        </p>

        <Link
          to={`/category/${highlight.id}`}
          className="inline-block mt-6 text-purple-600 font-semibold hover:underline"
        >
          Explore {highlight.name} →
        </Link>

      </div>
    </div>
  );
}

export default HighlightCard;