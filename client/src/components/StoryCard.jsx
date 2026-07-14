import { useNavigate } from "react-router-dom";

function StoryCard({ story }) {
  const navigate = useNavigate();

  function openStory() {
    navigate("/story", {
      state: { story },
    });
  }

  return (
    <article
      onClick={openStory}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col md:flex-row"
    >
      {/* Image */}
      <img
        src={story.image}
        alt={story.title}
        className="w-full md:w-[48%] h-72 md:h-auto object-cover"
      />

      {/* Content */}
      <div className="flex flex-col justify-between p-8 md:w-[52%]">
        <div>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>{story.source}</span>
            <span>{story.readTime} min read</span>
          </div>

          <h2 className="text-3xl font-bold leading-tight line-clamp-3">
            {story.title}
          </h2>

          <p className="mt-5 text-lg text-gray-600 line-clamp-4">
            {story.summary}
          </p>
        </div>

        <button className="mt-8 w-fit rounded-full bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition">
          Open Today's Brief →
        </button>
      </div>
    </article>
  );
}

export default StoryCard;