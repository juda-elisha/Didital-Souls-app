export function InvitePanel({ inviteUrl, invitesSent, invitesNeeded }: { inviteUrl: string, invitesSent: number, invitesNeeded: number }) {
  const progress = (invitesSent / invitesNeeded) * 100;
  return (
    <div className="invite-panel">
      <h3>Invite Friends</h3>
      <input value={inviteUrl} readOnly />
      <button onClick={() => navigator.clipboard.writeText(inviteUrl)}>Copy Link</button>
      <div className="social-share">
        <button>Share on Facebook</button>
        <button>Share on Twitter</button>
        <button>Share on LinkedIn</button>
        <button>Share via Email</button>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>
      <span>{invitesSent} / {invitesNeeded} invites sent</span>
    </div>
  );
}