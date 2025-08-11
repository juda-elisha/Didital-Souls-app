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