export function FreeTierModal({ chatsLeft, onInvite, onUpgrade, onLearnMore }: { chatsLeft: number, onInvite: () => void, onUpgrade: () => void, onLearnMore: () => void }) {
  return (
    <div className="modal free-tier-modal">
      <h2>Digital Souls — Text Chat Access</h2>
      <p>Access three AI companions via text chat.<br/>You have {chatsLeft} chats today. Invite 3 friends to unlock 3 more chats today.</p>
      <button className="primary" onClick={onInvite}>Invite Friends to Unlock 3 More Text Chats</button>
      <button className="secondary" onClick={onUpgrade}>Upgrade to VIP</button>
      <button className="tertiary" onClick={onLearnMore}>Learn More</button>
    </div>
  );
}
