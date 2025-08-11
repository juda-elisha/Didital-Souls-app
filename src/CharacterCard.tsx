import React from 'react';

export function CharacterCard({ name, bio, teaser }: { name: string, bio: string, teaser: string }) {
  return (
    <div className={`character-card ${name.toLowerCase()}`}>
      <img src={teaser} alt={`${name} teaser`} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button>Text Chat</button>
    </div>
  );
}