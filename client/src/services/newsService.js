import { supabase } from "../lib/supabase";
import {
  normalizeNASA,
} from "./storyNormalizer";

import { getSpaceStory } from "../api/nasaApi";

export async function fetchStories() {

  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .order("score", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((story) => ({
    id: story.id,

    title: story.title,

    summary: story.description,

    description: story.description,

    url: story.url,

    image: story.image,

    source: story.source,

    publishedAt: story.published_at,

    relevanceScore: story.score,

    whatHappened: story.what_happened,

    whyItMatters: story.why_it_matters,

    quickCheck: story.quick_check,
  }));
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