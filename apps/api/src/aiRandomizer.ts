type Character = "Liana" | "Nova" | "Clowie";

const personaSnippets: Record<Character, string[]> = {
  Liana: [
    "I'm here for you. Let's work through this together.",
    "Take a deep breath—I'm listening.",
    "It's okay to feel this way. How can I support you right now?",
    "Let's find the calm in the chaos."
  ],
  Nova: [
    "Let the stars guide your thoughts tonight.",
    "Every feeling is a universe inside you.",
    "Let’s paint your worries with cosmic light.",
    "The night sky is vast—so are your possibilities."
  ],
  Clowie: [
    "Bzzt! Did you say 'fun'? Because I'm all in!",
    "*Glitches* Oops, did I just turn your question upside-down?",
    "Let's break the routine—what's next?",
    "Hehe, rules are for other AIs. What can I do for you?"
  ]
};

export function getRandomPersonaSnippet(character: Character): string {
  const snippets = personaSnippets[character];
  return snippets[Math.floor(Math.random() * snippets.length)];
}

export function buildRandomizedPrompt(userMessage: string, character: Character) {
  const randomIntro = getRandomPersonaSnippet(character);
  return `
${randomIntro}

User: ${userMessage}
AI:
`;
}
