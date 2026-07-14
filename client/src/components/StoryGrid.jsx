import StoryCard from "./StoryCard"

export default function StoryGrid({ stories }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {stories.map((story, index) => (
        <StoryCard
          key={story.url || index}
          story={story}
        />
      ))}
    </div>
  )
}