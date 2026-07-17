import { useNavigate } from "react-router-dom";

function FeaturedStory({ story }) {
  const navigate = useNavigate();

  if (!story) return null;

  function openStory() {
    navigate("/story", {
      state: { story },
    });
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mt-10 md:mt-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Image */}

        <div>
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-64 sm:h-80 lg:h-full lg:min-h-[420px] object-cover"
          />
        </div>

        {/* Content */}

        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">

          <span className="inline-block w-fit rounded-full bg-purple-100 px-4 py-2 text-xs md:text-sm font-semibold text-purple-700">
            ⭐ Featured Story
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
            {story.title}
          </h2>

          <p className="mt-5 text-base md:text-lg leading-7 md:leading-8 text-gray-600">
            {story.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-500">
            <span className="truncate">{story.source}</span>
            <span>{story.readTime} min read</span>
          </div>

          <button
            onClick={openStory}
            className="mt-8 md:mt-10 w-full sm:w-fit rounded-full bg-purple-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-purple-700"
          >
            Open Today's Brief →
          </button>

        </div>

      </div>

    </section>
  );
}

export default FeaturedStory;