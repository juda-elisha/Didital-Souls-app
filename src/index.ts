export interface UserProfile {
  id: string;
  tier: 'free' | 'trial' | 'vip' | 'purchased';
  trialExpiresAt?: string;
  dailyUsage: {
    textChatUsed: number;
    textChatLimit: number;
    voiceUsed?: number;
    videoUsed?: number;
  };
  invites: {
    totalInvitesSent: number;
    invitesConverted: number;
    invitesNeededForRefresh: 3;
  };
  access: {
    Liana: boolean;
    Nova: boolean;
    Clowie: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Character {
  id: 'Liana' | 'Nova' | 'Clowie';
  name: string;
  personality: string;
  visualStyle: string;
  dialogueSnippets: string[];
  voiceProfile: { tone: string; language?: string; rate?: number };
  media: { avatarAsset: string; teaserAsset: string };
}

export interface UnlockFlow {
  type: 'freeText' | 'trial' | 'purchase' | 'vip';
  price?: number;
  currency?: 'USD';
  features: string[];
  modalText: {
    title: string;
    description: string;
    buttons: Array<{ label: string; action: string }>;
  };
}

export interface InviteLink {
  code: string;
  url: string;
  expiresAt?: string;
  maxUses?: number;
}
