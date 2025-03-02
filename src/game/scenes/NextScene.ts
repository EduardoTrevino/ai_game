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

    EventBus.emit('current-scene-ready', this);
  }
}
