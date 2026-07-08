import { useEffect, useState } from "react";
import { fetchHighlights } from "../services/highlightService";

export default function useHighlights() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchHighlights();
        setHighlights(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    highlights,
    loading,
  };
}