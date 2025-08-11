export interface InviteLink {
  code: string;
  url: string;
  expiresAt?: string;
  maxUses?: number;
}