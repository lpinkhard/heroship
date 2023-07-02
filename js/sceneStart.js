/**
 * Hero Ship
 *
 * Class:       SceneStart
 * Purpose:     Starting game scene which shows the title and a button to start the game
 *
 * @author      Lionel Pinkhard
 * Date:        May 16, 2019
 * @version     1.0
 *
 * Run on any web server
 */
class SceneStart extends
Phaser.Scene {
	/**
	 * Scene constructor
	 */
	constructor() {
		super("SceneStart");
	}

	/**
	 * Preload title and play button
	 */
	preload() {
		// Load images
		this.load.image('background', 'assets/game/title.png');
		this.load.image('play', 'assets/game/play.png');
		
		// Load music
		this.load.audio('music', [
			'assets/audio/music.ogg',
			'assets/audio/music.mp3'
		]);
	}

	/**
	 * Creates the scene
	 */
	create() {
		// Reference to object instance
		const gameObj = this;

		// Get dimensions
		const gameWidth = this.cameras.main.width;
		const gameHeight = this.cameras.main.height;
		const halfWidth = gameWidth / 2;
		const halfHeight = gameHeight / 2;

		// Set up background
		this.bg = this.add.sprite(halfWidth, halfHeight, 'background');
		this.playBtn = this.add.sprite(halfWidth, this.cameras.main.height * 0.75, 'play');
		this.playBtn.setInteractive();
     	this.playBtn.on('pointerdown', function() {
     		game.scene.stop('SceneStart');
     		game.scene.start('SceneGame');
     	});
     	
     	// Start music
		const music = this.sound.add('music');
		music.loop = true;
     	music.play();
	}

	/**
	 * Handles regular updates
	 */
	update() {
		// Nothing to do
	}
}
