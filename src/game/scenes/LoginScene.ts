// src/game/scenes/LoginScene.ts
import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class LoginScene extends Scene {
  constructor() {
    super('LoginScene');
  }

  create() {
    // White background, black text:
    this.cameras.main.setBackgroundColor('#ffffff');

    // We can show a small note or just rely on the overlay
    // We'll place minimal text here:
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      '',
      {
        fontFamily: 'Arial',
        fontSize: '20px',
        color: '#000'
      }
    ).setOrigin(0.5);

    // Let React know which scene is active
    EventBus.emit('current-scene-ready', this);

    //  Listen for the overlay event:
    EventBus.on('login-submitted', this.handleLogin, this);
  }

  private handleLogin(username: string) {
    // Move to next scene
    this.scene.start('NextScene', { username });
  }

  shutdown() {
    // Clean up event listeners if needed
    EventBus.off('login-submitted', this.handleLogin, this);
  }
}
