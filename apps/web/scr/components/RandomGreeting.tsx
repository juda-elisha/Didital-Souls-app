import React from 'react';

const greetings = [
  "Welcome back, dreamer!",
  "Hello again! Ready to chat?",
  "The companions are waiting for you.",
  "Let's unlock a new conversation today!"
];

export function RandomGreeting() {
  const [greeting] = React.useState(() => greetings[Math.floor(Math.random() * greetings.length)]);
  return <h2>{greeting}</h2>;
}