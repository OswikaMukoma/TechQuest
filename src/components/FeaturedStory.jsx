function FeaturedStory({ story }) {
  if (!story) return null;

  return (
    <section className="max-w-7xl mx-auto px-8 mt-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Image */}
        <div className="h-full">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover min-h-[420px]"
          />
        </div>

        {/* Content */}
        <div className="p-10">

          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            ⭐ Featured Story
          </span>

          <h2 className="text-4xl font-bold mt-6 leading-tight">
            {story.title}
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            {story.summary}
          </p>

          <div className="flex gap-6 text-gray-500 mt-8 text-sm">
            <span>{story.source}</span>
            <span>{story.readTime}</span>
          </div>

          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Read Story →
          </a>

        </div>
      </div>
    </section>
  );
}

export default FeaturedStory;