import React, { useState } from 'react';
import { RandomGreeting } from './components/RandomGreeting';
import { ChatInput } from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const characterId = "Liana"; // or "Nova", "Clowie", or let the user pick!

  return (
    <div>
      <h1>Digital Souls</h1>
      <RandomGreeting />
      <div>
        {messages.map((msg, i) => <div key={i}>{msg}</div>)}
      </div>
      <ChatInput
        characterId={characterId}
        onResponse={reply => setMessages(msgs => [...msgs, reply])}
      />
    </div>
  );
}

export default App;