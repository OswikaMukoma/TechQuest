// Positive keywords
const positiveKeywords = {
  ai: 5,
  "artificial intelligence": 5,
  openai: 5,
  microsoft: 4,
  google: 4,
  amazon: 4,
  meta: 4,
  nvidia: 5,
  github: 4,
  internship: 6,
  graduate: 6,
  graduates: 6,
  career: 6,
  careers: 6,
  hiring: 5,
  university: 6,
  universities: 6,
  student: 6,
  students: 6,
  scholarship: 6,
  research: 4,
  cloud: 4,
  software: 4,
  developer: 4,
  engineering: 4,
  cybersecurity: 4,
  "machine learning": 5,
  "data science": 5,
  startup: 3,
  certification: 5,
};

// Negative keywords
const negativeKeywords = {
  iphone: -3,
  android: -2,
  galaxy: -2,
  smartphone: -4,
  camera: -4,
  television: -5,
  tv: -5,
  gaming: -4,
  xbox: -4,
  playstation: -4,
  netflix: -3,
  disney: -3,
  celebrity: -6,
  rumor: -3,
  rumours: -3,
  leak: -3,
};

function calculateScore(story) {
  const text = `
    ${story.title || ""}
    ${story.summary || ""}
  `.toLowerCase();

  let score = 0;

  Object.entries(positiveKeywords).forEach(([keyword, points]) => {
    if (text.includes(keyword)) {
      score += points;
    }
  });

  Object.entries(negativeKeywords).forEach(([keyword, points]) => {
    if (text.includes(keyword)) {
      score += points;
    }
  });

  return score;
}

export function filterRelevantStories(stories) {
  return stories
    .map((story) => ({
      ...story,
      relevanceScore: calculateScore(story),
    }))
    .filter((story) => story.relevanceScore >= 5)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}