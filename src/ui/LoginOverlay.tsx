// src/ui/LoginOverlay.tsx
import React, { useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input"    // Example import path
import { Button } from "@/components/ui/button"
import { EventBus } from '../game/EventBus';

export function LoginOverlay() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Emit an event so the LoginScene can catch it (or do a direct call to scene? Up to you)
    EventBus.emit('login-submitted', username);
  };

  return (
    <div style={overlayStyles}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label style={labelStyles}>Sign in with your username:</label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type username..."
        />
        <Button type="submit" style={{ marginTop: '10px' }}>
          Enter
        </Button>
      </form>
    </div>
  );
}

// Some inline styles to overlay on top of Phaser:
const overlayStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  // White background slightly transparent:
  background: 'rgba(255,255,255,0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10 // ensure it sits above the Phaser canvas
};

const formStyles: React.CSSProperties = {
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)'
};

const labelStyles: React.CSSProperties = {
  display: 'block',
  marginBottom: '8px',
  color: '#000'
};
