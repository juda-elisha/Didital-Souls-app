export interface Character {
  id: 'Liana' | 'Nova' | 'Clowie';
  name: string;
  personality: string;
  visualStyle: string;
  dialogueSnippets: string[];
  voiceProfile: {
    tone: string;
    language?: string;
    rate?: number;
  };
  media: {
    avatarAsset: string;
    teaserAsset: string;
  };
}
