import { Boot } from './scenes/Boot';
// import { GameOver } from './scenes/GameOver';
// import { Game as MainGame } from './scenes/Game';
// import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { LoginScene } from './scenes/LoginScene';
import { NextScene } from './scenes/NextScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
        parent: 'game-container',
        mode: Phaser.Scale.FIT,       // Or Phaser.Scale.ENVELOP / RESIZE, depending on preference
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 768
      },
      // backgroundColor: '#ffffff',
    
      scene: [
        Boot,
        Preloader,
        LoginScene,    
        NextScene      
      ]
    };

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
