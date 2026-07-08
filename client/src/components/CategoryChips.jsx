const categories = [
  "All",
  "AI",
  "Jobs",
  "Universities",
  "Technology",
  "Politics",
  "Business",
  "Science",
]

export default function CategoryChips({
  selected,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full transition font-medium ${
            selected === category
              ? "bg-violet-600 text-white shadow-lg"
              : "bg-white border hover:bg-violet-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}