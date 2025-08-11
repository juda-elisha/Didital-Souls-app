export function TrialUpgradeModal({ onTrial, onPurchase, onVip }: { onTrial: () => void, onPurchase: () => void, onVip: () => void }) {
  return (
    <div className="modal trial-upgrade-modal">
      <h2>Digital Souls: Liana, Nova, and Clowie</h2>
      <p>3-day free trial with full access (text, voice, video) and photorealistic avatars.</p>
      <button className="primary" onClick={onTrial}>Start Free Trial</button>
      <button className="secondary" onClick={onPurchase}>$4.99 One-Time Unlock</button>
      <button className="tertiary" onClick={onVip}>Become a VIP</button>
    </div>
  );
}