// src/game/scenes/NextScene.ts
import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class NextScene extends Scene {
  constructor() {
    super('NextScene');
  }

  preload() {
    this.load.image("tiles", "/assets/texture.png");
    this.load.tilemapTiledJSON("map", "/assets/map1.json");
  }

  create(data: any) {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tiles1", "tiles");
    
    if (!tileset) {
        console.error("Failed to load tileset");
        return;
    }
    
    const layer = map.createLayer("toplayer", tileset, 0, 0);
    // White background
    // this.cameras.main.setBackgroundColor('#ffffff');

    // const { username } = data;
    // this.add.text(
    //   this.scale.width / 2,
    //   40,
    //   `Welcome, ${username}!`,
    //   {
    //     fontFamily: 'Arial',
    //     fontSize: '28px',
    //     color: '#000'
    //   }
    // ).setOrigin(0.5, 0);

    // try {
    //     // Create the tilemap
    //     const map = this.make.tilemap({ key: 'village' });
        
    //     // Add the tileset image to the map
    //     // First parameter must match the name in the tilemap json (the name of the tileset)
    //     // Second parameter is the key of the tileset image we loaded in the preloader
    //     const tileset = map.addTilesetImage('texture', 'texture');
        
    //     if (!tileset) {
    //         console.error("Failed to load tileset");
    //         return;
    //     }

    //     // Create the layers
    //     // The string must match the layer name in your Tiled map
    //     const groundLayer = map.createLayer('ground', tileset, 0, 80);
    //     const rocksLayer = map.createLayer('rocks', tileset, 0, 80);

    //     if (!groundLayer || !rocksLayer) {
    //         console.error("Failed to create layers");
    //         return;
    //     }

    // } catch (error) {
    //     console.error("Error creating tilemap:", error);
    // }
    
    // Let React know we're active
    EventBus.emit('current-scene-ready', this);
  }
}
