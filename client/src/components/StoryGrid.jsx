import StoryCard from "./StoryCard"

export default function StoryGrid({ stories }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stories.map((story, index) => (
        <StoryCard
          key={story.url || index}
          story={story}
        />
      ))}
    </div>
  )
}