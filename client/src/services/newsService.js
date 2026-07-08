import { getTopStories } from "../api/newsApi";
import { getSpaceStory } from "../api/nasaApi";

import {
  normalizeNewsArticle,
  normalizeNASA,
} from "./storyNormalizer";

export async function fetchStories(category = "technology") {
  try {
    const articles = await getTopStories(category);

    const stories = articles.map(normalizeNewsArticle);

    return stories;
  } catch (error) {
    console.error(error);

    return [];
  }
}

export async function fetchSpaceStory() {
  try {
    const story = await getSpaceStory();

    return normalizeNASA(story);
  } catch (error) {
    console.error(error);

    return null;
  }
}