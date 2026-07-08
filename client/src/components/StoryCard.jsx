import { useNavigate } from "react-router-dom";

function StoryCard({ story }) {
  const navigate = useNavigate();

  function openStory() {
    navigate(`/story/${story.id}`, {
      state: { story },
    });
  }

  return (
    <article
      onClick={openStory}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
          <span>{story.source}</span>
          <span>{story.readTime} min read</span>
        </div>

        <h2 className="text-xl font-bold line-clamp-2">
          {story.title}
        </h2>

        <p className="mt-3 text-gray-600 line-clamp-3">
          {story.summary}
        </p>

        <button
          className="mt-6 text-purple-600 font-semibold hover:underline"
        >
          Open Brief →
        </button>
      </div>
    </article>
  );
}

export default StoryCard;