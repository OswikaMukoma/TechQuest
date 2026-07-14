import StoryCard from "./StoryCard"

export default function StoryGrid({ stories }) {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {stories.map((story, index) => (
        <StoryCard
          key={story.url || index}
          story={story}
        />
      ))}
    </div>
  )
}