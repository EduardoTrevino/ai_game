// src/ui/MainGui.tsx
import React from 'react';

export function MainGui() {
  // For now, just some placeholders:
  // In practice, you'd store these states in React or fetch them from the Phaser scene
  const cash = 10;
  const time = 5;
  const reputation = 0;
  const knowledge = 1;

  return (
    <div style={guiStyles}>
      <div style={resourceItem}><span>💰</span> Cash: {cash}</div>
      <div style={resourceItem}><span>⏱️</span> Time: {time}</div>
      <div style={resourceItem}><span>✨</span> Reputation: {reputation}</div>
      <div style={resourceItem}><span>📚</span> Knowledge: {knowledge}</div>
    </div>
  );
}

const guiStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  background: 'rgba(255,255,255,0.8)',
  color: '#000',
  padding: '10px',
  borderRadius: '6px'
};

const resourceItem: React.CSSProperties = {
  margin: '4px 0'
};
