export function HomeOverview({ userTier }: { userTier: string }) {
  return (
    <div className="home-overview">
      <h1>Digital Souls</h1>
      <div className="character-cards">
        <CharacterCard id="Liana" name="Liana" bio="Wise, calm mentor and guide. Always ready with thoughtful advice." teaser="liana-teaser.png" />
        <CharacterCard id="Nova" name="Nova" bio="Poetic, emotional, starfield muse. Inspires creativity and wonder." teaser="nova-teaser.png" />
        <CharacterCard id="Clowie" name="Clowie" bio="Cryptic, playful, glitchy AI. Unpredictable yet endearing." teaser="clowie-teaser.gif" />
      </div>
      {/* Add voice/video buttons if userTier !== 'free' */}
    </div>
  );
}

// Card component would be defined elsewhere for reusability