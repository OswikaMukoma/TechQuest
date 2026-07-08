import { useEffect, useState } from "react"
import { fetchStories } from "../services/newsService"

export default function useStories(category = "technology") {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadStories() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchStories(category)
        setStories(data)
      } catch (err) {
        setError("Failed to fetch news")
      } finally {
        setLoading(false)
      }
    }

    loadStories()
  }, [category])

  return {
    stories,
    loading,
    error,
  }
}