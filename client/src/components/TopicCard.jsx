function TopicCard({ emoji, title, badge, badgeColor, time }) {
  return (
    <div className="w-72 rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-5xl">
        {emoji}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 flex items-center justify-between">

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeColor}`}
        >
          {badge}
        </span>

        <span className="text-sm text-slate-500">
          {time}
        </span>

      </div>

    </div>
  );
}

export default TopicCard;