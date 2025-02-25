// src/App.tsx
import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';
import { EventBus } from './game/EventBus';
import { LoginOverlay } from '@/ui/LoginOverlay';
import { MainGui } from '@/ui/MainGui';

function App() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [currentSceneKey, setCurrentSceneKey] = useState<string>('');

  // Listen for scene changes:
  const onSceneReady = (scene: Phaser.Scene) => {
    setCurrentSceneKey(scene.scene.key);
  };

  return (
    <div id="app">
      {/* This renders Phaser in a <div id="game-container"> */}
      <PhaserGame ref={phaserRef} currentActiveScene={onSceneReady} />

      {/*
        If we are in the "LoginScene", show a React overlay with a Shadcn Input
        otherwise show the main GUI if we’re in the “NextScene” (the “Main” scene).
      */}
      {currentSceneKey === 'LoginScene' && (
        <LoginOverlay />
      )}

      {currentSceneKey === 'NextScene' && (
        <MainGui />
      )}
    </div>
  );
}

export default App;