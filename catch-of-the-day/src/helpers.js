export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "angry",
    "arcane",
    "beautiful",
    "bewildered",
    "clean",
    "clumsy",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "gratuitous",
    "handsome",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "long",
    "magnificent",
    "mysterious",
    "nervous",
    "obnoxious",
    "old-fashioned",
    "panicky",
    "plain",
    "quaint",
    "repulsive",
    "scary",
    "snazzy",
    "sparkling",
    "stringy",
    "thoughtless",
    "ugliest",
    "unsightly",
    "uptight",
    "worried"
  ];

  const nouns = [
    "analyses",
    "cacti",
    "criteria",
    "children",
    "crises",
    "data",
    "diagnoses",
    "elves",
    "feet",
    "foci",
    "fungi",
    "geese",
    "halves",
    "knives",
    "leaves",
    "lives",
    "loaves",
    "men",
    "mice",
    "nuclei",
    "oases",
    "people",
    "phenomena",
    "potatoes",
    "syllabuses",
    "teeth",
    "theses",
    "tomatoes",
    "wives",
    "women"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
