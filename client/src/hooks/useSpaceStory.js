import { useEffect, useState } from "react";

import { fetchSpaceStory } from "../services/newsService";

export default function useSpaceStory() {
  const [story, setStory] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await fetchSpaceStory();

      setStory(result);

      setLoading(false);
    }

    load();
  }, []);

  return { story, loading };
}