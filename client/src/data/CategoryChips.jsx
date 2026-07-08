import categories from "../data/categories";

function CategoryChips() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-10">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="
              bg-white
              border
              border-purple-200
              rounded-full
              px-6
              py-3
              shadow-sm
              hover:bg-purple-600
              hover:text-white
              hover:scale-105
              transition-all
              duration-300
              font-semibold
            "
          >
            <span className="mr-2">{category.emoji}</span>
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryChips;