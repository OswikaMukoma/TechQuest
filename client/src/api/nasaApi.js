const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function getSpaceStory() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch NASA story");
  }

  return await response.json();
}