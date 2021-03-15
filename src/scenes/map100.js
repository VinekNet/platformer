class Map100 extends Tableau{
    preload() {
        super.preload();

    this.load.image('tiles', 'assets/tiled/tableauTiledTileset.png');
    // Load the export Tiled JSON
    this.load.tilemapTiledJSON('map', 'assets/tiled/map100.json');
  }
  create() {
      super.create();
    const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
    backgroundImage.setScale(2, 0.8);
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tableauTiledTileset', 'tiles');
    const platforms = map.createStaticLayer('Platforms', tileset, 0, 200);  
    //platforms.setCollisionByExclusion(-1, true);

}
}