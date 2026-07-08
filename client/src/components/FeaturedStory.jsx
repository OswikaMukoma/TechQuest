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
    <section className="max-w-7xl mx-auto px-8 mt-16">
      <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden">

        <div>
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full min-h-[420px] object-cover"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">

          <span className="inline-block w-fit bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
            ⭐ Featured Story
          </span>

          <h2 className="text-4xl font-bold mt-6 leading-tight">
            {story.title}
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            {story.summary}
          </p>

          <div className="flex gap-6 mt-8 text-gray-500 text-sm">
            <span>{story.source}</span>
            <span>{story.readTime} min read</span>
          </div>

          <button
            onClick={openStory}
            className="mt-10 w-fit bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Open Today's Brief →
          </button>

        </div>

      </div>
    </section>
  );
}

export default FeaturedStory;