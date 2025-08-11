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