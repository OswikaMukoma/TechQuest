import { getTopStories } from "../api/newsApi";
import { getSpaceStory } from "../api/nasaApi";

import {
  normalizeNewsArticle,
  normalizeNASA,
} from "./storyNormalizer";

import { filterRelevantStories } from "./relevanceEngine.js";

export async function fetchStories(category = "technology") {
  try {
    const articles = await getTopStories(category);

    const stories = articles.map(normalizeNewsArticle);

    // ⭐ Keep only stories relevant to TechQuest
    const relevantStories = filterRelevantStories(stories);

    return relevantStories;
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