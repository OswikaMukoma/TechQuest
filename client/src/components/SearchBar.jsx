import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section className="max-w-3xl mx-auto px-8 mt-10">
      <div className="relative">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search AI, careers, universities, companies..."
          className="
            w-full
            bg-white
            rounded-full
            py-4
            pl-14
            pr-6
            text-lg
            border
            border-gray-200
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-purple-500
            transition
          "
        />
      </div>
    </section>
  );
}

export default SearchBar;