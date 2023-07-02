/**
 * Hero Ship
 *
 * Class:       SceneGame
 * Purpose:     Main game scene where most of the action takes place
 *
 * @author      Lionel Pinkhard
 * Date:        May 16, 2019
 * @version     1.0
 *
 * Run on any web server
 */
class SceneGame extends
Phaser.Scene {
	/**
	 * Scene constructor
	 */
	constructor() {
		super("SceneGame");
	}

	/**
	 * Preload the assets for the scene
	 */
	preload() {
		// Load background images
		this.load.image('background1', 'assets/world/bg1.png');
		this.load.image('background2', 'assets/world/bg2.png');
		this.load.image('background3', 'assets/world/bg3.png');
		this.load.image('background4', 'assets/world/bg4.png');
		this.load.image('stars1', 'assets/world/stars1.png');
		this.load.image('stars2', 'assets/world/stars2.png');
		this.load.image('planets1', 'assets/world/planets1.png');
		this.load.image('planets2', 'assets/world/planets2.png');
		this.load.image('planets3', 'assets/world/planets3.png');
		this.load.image('planets4', 'assets/world/planets4.png');
		this.load.image('meteors', 'assets/world/meteors.png');

		// Load power ups
		this.load.image('restore', 'assets/powerup/restore.png');
		this.load.image('double', 'assets/powerup/double.png');
		this.load.image('damage', 'assets/powerup/damage.png');

		// Load text and buttons
		this.load.image('gameover', 'assets/game/gameover.png');
		this.load.image('escaped', 'assets/game/escaped.png');
		this.load.image('restart', 'assets/game/restart.png');

		// Load player sprite sheets (ship 1)
		this.load.spritesheet('player11', 'assets/player/ship1/level1.png', {
			frameWidth : 119,
			frameHeight : 97
		});
		this.load.spritesheet('player21', 'assets/player/ship1/level2.png', {
			frameWidth : 177,
			frameHeight : 96
		});
		this.load.spritesheet('player31', 'assets/player/ship1/level3.png', {
			frameWidth : 159,
			frameHeight : 90
		});
		this.load.spritesheet('player41', 'assets/player/ship1/level4.png', {
			frameWidth : 172,
			frameHeight : 90
		});
		this.load.spritesheet('player51', 'assets/player/ship1/level5.png', {
			frameWidth : 77,
			frameHeight : 97
		});

		// Load player sprite sheets (ship 2)
		this.load.spritesheet('player12', 'assets/player/ship2/level1.png', {
			frameWidth : 177,
			frameHeight : 96
		});
		this.load.spritesheet('player22', 'assets/player/ship2/level2.png', {
			frameWidth : 177,
			frameHeight : 96
		});
		this.load.spritesheet('player32', 'assets/player/ship2/level3.png', {
			frameWidth : 203,
			frameHeight : 97
		});
		this.load.spritesheet('player42', 'assets/player/ship2/level4.png', {
			frameWidth : 158,
			frameHeight : 97
		});
		this.load.spritesheet('player52', 'assets/player/ship2/level5.png', {
			frameWidth : 103,
			frameHeight : 96
		});

		// Load player sprite sheets (ship 3)
		this.load.spritesheet('player13', 'assets/player/ship3/level1.png', {
			frameWidth : 163,
			frameHeight : 97
		});
		this.load.spritesheet('player23', 'assets/player/ship3/level2.png', {
			frameWidth : 170,
			frameHeight : 97
		});
		this.load.spritesheet('player33', 'assets/player/ship3/level3.png', {
			frameWidth : 166,
			frameHeight : 97
		});
		this.load.spritesheet('player43', 'assets/player/ship3/level4.png', {
			frameWidth : 156,
			frameHeight : 96
		});
		this.load.spritesheet('player53', 'assets/player/ship3/level5.png', {
			frameWidth : 92,
			frameHeight : 97
		});

		// Load player bullet spritesheets
		this.load.spritesheet('playerFire1', 'assets/player/ship1/fire.png', {
			frameWidth : 181,
			frameHeight : 124
		});
		this.load.spritesheet('playerFire2', 'assets/player/ship2/fire.png', {
			frameWidth : 181,
			frameHeight : 172
		});
		this.load.spritesheet('playerFire3', 'assets/player/ship3/fire.png', {
			frameWidth : 181,
			frameHeight : 172
		});

		// Load Defence Force enemies
		this.load.spritesheet('enemy11', 'assets/enemy/df/level1.png', {
			frameWidth : 91,
			frameHeight : 93
		});
		this.load.spritesheet('enemy21', 'assets/enemy/df/level2.png', {
			frameWidth : 148,
			frameHeight : 137
		});
		this.load.spritesheet('enemy31', 'assets/enemy/df/level3.png', {
			frameWidth : 119,
			frameHeight : 93
		});
		this.load.spritesheet('enemy41', 'assets/enemy/df/level4.png', {
			frameWidth : 119,
			frameHeight : 93
		});
		this.load.spritesheet('enemy51', 'assets/enemy/df/level5.png', {
			frameWidth : 99,
			frameHeight : 103
		});
		this.load.spritesheet('enemy61', 'assets/enemy/df/level6.png', {
			frameWidth : 100,
			frameHeight : 92
		});
		
		// Load Pirate enemies
		this.load.spritesheet('enemy12', 'assets/enemy/pirates/level1.png', {
			frameWidth : 79,
			frameHeight : 123
		});
		this.load.spritesheet('enemy22', 'assets/enemy/pirates/level2.png', {
			frameWidth : 226,
			frameHeight : 194
		});
		this.load.spritesheet('enemy32', 'assets/enemy/pirates/level3.png', {
			frameWidth : 143,
			frameHeight : 123
		});
		this.load.spritesheet('enemy42', 'assets/enemy/pirates/level4.png', {
			frameWidth : 143,
			frameHeight : 123
		});
		this.load.spritesheet('enemy52', 'assets/enemy/pirates/level5.png', {
			frameWidth : 133,
			frameHeight : 122
		});
		this.load.spritesheet('enemy62', 'assets/enemy/pirates/level6.png', {
			frameWidth : 143,
			frameHeight : 123
		});
		
		// Load UFO enemies
		this.load.spritesheet('enemy13', 'assets/enemy/ufos/level1.png', {
			frameWidth : 98,
			frameHeight : 120
		});
		this.load.spritesheet('enemy23', 'assets/enemy/ufos/level2.png', {
			frameWidth : 121,
			frameHeight : 99
		});
		this.load.spritesheet('enemy33', 'assets/enemy/ufos/level3.png', {
			frameWidth : 131,
			frameHeight : 99
		});
		this.load.spritesheet('enemy43', 'assets/enemy/ufos/level4.png', {
			frameWidth : 145,
			frameHeight : 100
		});
		this.load.spritesheet('enemy53', 'assets/enemy/ufos/level5.png', {
			frameWidth : 162,
			frameHeight : 100
		});
		this.load.spritesheet('enemy63', 'assets/enemy/ufos/level6.png', {
			frameWidth : 222,
			frameHeight : 100
		});

		// Load bosses
		this.load.spritesheet('boss1', 'assets/enemy/pirates/boss.png', {
			frameWidth : 540,
			frameHeight : 343
		});
		this.load.spritesheet('boss2', 'assets/enemy/df/boss1.png', {
			frameWidth : 543,
			frameHeight : 277
		});
		this.load.spritesheet('boss3', 'assets/enemy/ufos/boss.png', {
			frameWidth : 596,
			frameHeight : 597
		});
		this.load.spritesheet('boss4', 'assets/enemy/df/boss2.png', {
			frameWidth : 651,
			frameHeight : 332
		});

		// Load enemy bullets
		this.load.spritesheet('enemyFire1', 'assets/enemy/df/fire.png', {
			frameWidth : 80,
			frameHeight : 124
		});
		this.load.spritesheet('enemyFire2', 'assets/enemy/pirates/fire.png', {
			frameWidth : 169,
			frameHeight : 117
		});
		this.load.spritesheet('enemyFire3', 'assets/enemy/ufos/fire.png', {
			frameWidth : 116,
			frameHeight : 100
		});
		
		// Load audio assets
		this.load.audio('shoot1', ['assets/audio/shoot1.mp3', 'assets/audio/shoot1.ogg']);
		this.load.audio('shoot2', ['assets/audio/shoot2.mp3', 'assets/audio/shoot2.ogg']);
		this.load.audio('explode', ['assets/audio/explode.mp3', 'assets/audio/explode.ogg']);
		this.load.audio('hit', ['assets/audio/hit.mp3', 'assets/audio/hit.ogg']);
		this.load.audio('pickup', ['assets/audio/pickup.mp3', 'assets/audio/pickup.ogg']);
		
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
		var gameObj = this;
		
		// Get dimensions
		var gameWidth = this.cameras.main.width;
		var gameHeight = this.cameras.main.height;
		var halfWidth = gameWidth / 2;
		var halfHeight = gameHeight / 2;

		// Set up backgrounds
		this.bg = this.add.tileSprite(halfWidth, halfHeight, gameWidth, gameHeight, 'background' + gameLevel);
		this.stars = this.add.tileSprite(halfWidth, halfHeight, gameWidth, gameHeight, 'stars' + Math.ceil(parseInt(gameLevel) / 2));
		this.planets = this.add.tileSprite(halfWidth, halfHeight, 0, gameHeight, 'planets' + gameLevel);
		this.meteors = this.add.tileSprite(halfWidth, halfHeight, gameWidth, gameHeight, 'meteors');

		// Add health & xp bar
		this.healthbar = this.add.graphics();
		this.healthbar.lineStyle(5, 0xffffff, 1.0);
		this.healthbar.fillStyle(0x00ff00, 1.0);
		this.healthbar.fillRect(halfWidth - 100, gameHeight - 60, 200, 20);
		this.healthbar.strokeRect(halfWidth - 100, gameHeight - 60, 200, 20);
		this.healthbar.fillStyle(0xffff00, 1.0);
		this.healthbar.fillRect(halfWidth - 100, gameHeight - 85, 0, 20);
		this.healthbar.strokeRect(halfWidth - 100, gameHeight - 85, 200, 20);

		// Add power ups
		this.powerups = this.physics.add.group();

		// Add player
		this.gamePlayers = this.physics.add.group();
		this.gamePlayer = this.gamePlayers.create(halfWidth, gameHeight - 75, 'player11');
		this.gamePlayer.setCollideWorldBounds(true);
		this.gamePlayer.setSize(105, 85);
		this.gamePlayer.hitPoints = 50;
		this.gamePlayer.maxHP = 50;
		this.gamePlayer.damagePoints = 5;
		this.gamePlayer.fireSpeed = 0.22;
		this.gamePlayer.lastFire = Date.now();
		this.gamePlayer.isEnemy = false;
		this.gamePlayer.level = 1;
		this.gamePlayer.type = 1;
		this.gamePlayer.lType = '11';
		this.gamePlayer.dead = false;

		// Add enemies
		this.enemies = this.physics.add.group();
				
		// Create animations
		
		// Player explode animations (ship 1)
		this.anims.create({
			key : 'playerExplode11',
			frames : this.anims.generateFrameNumbers('player11', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode21',
			frames : this.anims.generateFrameNumbers('player21', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode31',
			frames : this.anims.generateFrameNumbers('player31', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode41',
			frames : this.anims.generateFrameNumbers('player41', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode51',
			frames : this.anims.generateFrameNumbers('player51', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Player explode animations (ship 2)
		this.anims.create({
			key : 'playerExplode12',
			frames : this.anims.generateFrameNumbers('player12', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode22',
			frames : this.anims.generateFrameNumbers('player22', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode32',
			frames : this.anims.generateFrameNumbers('player32', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode42',
			frames : this.anims.generateFrameNumbers('player42', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode52',
			frames : this.anims.generateFrameNumbers('player52', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Player explode animations (ship 3)
		this.anims.create({
			key : 'playerExplode13',
			frames : this.anims.generateFrameNumbers('player13', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode23',
			frames : this.anims.generateFrameNumbers('player23', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode33',
			frames : this.anims.generateFrameNumbers('player33', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode43',
			frames : this.anims.generateFrameNumbers('player43', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});
		this.anims.create({
			key : 'playerExplode53',
			frames : this.anims.generateFrameNumbers('player53', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Default player state animation (ship 1)
		this.anims.create({
			key : 'playerDefault11',
			frames : [{
				key : 'player11',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault21',
			frames : [{
				key : 'player21',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault31',
			frames : [{
				key : 'player31',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault41',
			frames : [{
				key : 'player41',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault51',
			frames : [{
				key : 'player51',
				frame : 0
			}],
			frameRate : 20
		});

		// Default player state animation (ship 2)
		this.anims.create({
			key : 'playerDefault12',
			frames : [{
				key : 'player12',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault22',
			frames : [{
				key : 'player22',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault32',
			frames : [{
				key : 'player32',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault42',
			frames : [{
				key : 'player42',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault52',
			frames : [{
				key : 'player52',
				frame : 0
			}],
			frameRate : 20
		});

		// Default player state animation (ship 3)
		this.anims.create({
			key : 'playerDefault13',
			frames : [{
				key : 'player13',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault23',
			frames : [{
				key : 'player23',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault33',
			frames : [{
				key : 'player33',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault43',
			frames : [{
				key : 'player43',
				frame : 0
			}],
			frameRate : 20
		});
		this.anims.create({
			key : 'playerDefault53',
			frames : [{
				key : 'player53',
				frame : 0
			}],
			frameRate : 20
		});

		// Level 1 enemy explode animations
		this.anims.create({
			key : 'enemyExplode11',
			frames : this.anims.generateFrameNumbers('enemy11', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode12',
			frames : this.anims.generateFrameNumbers('enemy12', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode13',
			frames : this.anims.generateFrameNumbers('enemy13', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Level 2 enemy explode animations
		this.anims.create({
			key : 'enemyExplode21',
			frames : this.anims.generateFrameNumbers('enemy21', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode22',
			frames : this.anims.generateFrameNumbers('enemy22', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode23',
			frames : this.anims.generateFrameNumbers('enemy23', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Level 3 enemy explode animations
		this.anims.create({
			key : 'enemyExplode31',
			frames : this.anims.generateFrameNumbers('enemy31', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode32',
			frames : this.anims.generateFrameNumbers('enemy32', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode33',
			frames : this.anims.generateFrameNumbers('enemy33', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Level 4 enemy explode animations
		this.anims.create({
			key : 'enemyExplode41',
			frames : this.anims.generateFrameNumbers('enemy41', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode42',
			frames : this.anims.generateFrameNumbers('enemy42', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode43',
			frames : this.anims.generateFrameNumbers('enemy43', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Level 5 enemy explode animations
		this.anims.create({
			key : 'enemyExplode51',
			frames : this.anims.generateFrameNumbers('enemy51', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode52',
			frames : this.anims.generateFrameNumbers('enemy52', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode53',
			frames : this.anims.generateFrameNumbers('enemy53', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Level 6 enemy explode animations
		this.anims.create({
			key : 'enemyExplode61',
			frames : this.anims.generateFrameNumbers('enemy61', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode62',
			frames : this.anims.generateFrameNumbers('enemy62', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplode63',
			frames : this.anims.generateFrameNumbers('enemy63', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Boss explode animations
		this.anims.create({
			key : 'enemyExplodeBoss1',
			frames : this.anims.generateFrameNumbers('boss1', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplodeBoss2',
			frames : this.anims.generateFrameNumbers('boss2', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplodeBoss3',
			frames : this.anims.generateFrameNumbers('boss3', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyExplodeBoss4',
			frames : this.anims.generateFrameNumbers('boss4', {
				start : 1,
				end : 9
			}),
			frameRate : 20,
			repeat : 0
		});

		// Player left/right movement animations
		
		this.anims.create({
			key : 'left11',
			frames : this.anims.generateFrameNumbers('player11', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right11',
			frames : this.anims.generateFrameNumbers('player11', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left21',
			frames : this.anims.generateFrameNumbers('player21', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right21',
			frames : this.anims.generateFrameNumbers('player21', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left31',
			frames : this.anims.generateFrameNumbers('player31', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right31',
			frames : this.anims.generateFrameNumbers('player31', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left41',
			frames : this.anims.generateFrameNumbers('player41', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right41',
			frames : this.anims.generateFrameNumbers('player41', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left51',
			frames : this.anims.generateFrameNumbers('player51', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right51',
			frames : this.anims.generateFrameNumbers('player51', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left12',
			frames : this.anims.generateFrameNumbers('player12', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right12',
			frames : this.anims.generateFrameNumbers('player12', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left22',
			frames : this.anims.generateFrameNumbers('player22', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right22',
			frames : this.anims.generateFrameNumbers('player22', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left32',
			frames : this.anims.generateFrameNumbers('player32', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right32',
			frames : this.anims.generateFrameNumbers('player32', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left42',
			frames : this.anims.generateFrameNumbers('player42', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right42',
			frames : this.anims.generateFrameNumbers('player42', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left52',
			frames : this.anims.generateFrameNumbers('player52', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right52',
			frames : this.anims.generateFrameNumbers('player52', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left13',
			frames : this.anims.generateFrameNumbers('player13', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right13',
			frames : this.anims.generateFrameNumbers('player13', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left23',
			frames : this.anims.generateFrameNumbers('player23', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right23',
			frames : this.anims.generateFrameNumbers('player23', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left33',
			frames : this.anims.generateFrameNumbers('player33', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right33',
			frames : this.anims.generateFrameNumbers('player33', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left43',
			frames : this.anims.generateFrameNumbers('player43', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right43',
			frames : this.anims.generateFrameNumbers('player43', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'left53',
			frames : this.anims.generateFrameNumbers('player53', {
				start : 10,
				end : 11
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'right53',
			frames : this.anims.generateFrameNumbers('player53', {
				start : 12,
				end : 13
			}),
			frameRate : 10,
			repeat : 0
		});

		// Damaged ship frames
		
		this.anims.create({
			key : 'damaged11',
			frames : [{
				key : 'enemy11',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged12',
			frames : [{
				key : 'enemy12',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged13',
			frames : [{
				key : 'enemy13',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged21',
			frames : [{
				key : 'enemy21',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged22',
			frames : [{
				key : 'enemy22',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged23',
			frames : [{
				key : 'enemy23',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged31',
			frames : [{
				key : 'enemy31',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged32',
			frames : [{
				key : 'enemy32',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged33',
			frames : [{
				key : 'enemy33',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged41',
			frames : [{
				key : 'enemy41',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged42',
			frames : [{
				key : 'enemy42',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged43',
			frames : [{
				key : 'enemy43',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged51',
			frames : [{
				key : 'enemy51',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged52',
			frames : [{
				key : 'enemy52',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged53',
			frames : [{
				key : 'enemy53',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged61',
			frames : [{
				key : 'enemy61',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged62',
			frames : [{
				key : 'enemy62',
				frame : 10
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'damaged63',
			frames : [{
				key : 'enemy63',
				frame : 10
			}],
			frameRate : 20
		});

		// Player bullets

		this.anims.create({
			key : 'playerFire1',
			frames : this.anims.generateFrameNumbers('playerFire1', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'playerFire2',
			frames : this.anims.generateFrameNumbers('playerFire2', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'playerFire3',
			frames : this.anims.generateFrameNumbers('playerFire3', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});
		
		// Player bullet explosions

		this.anims.create({
			key : 'playerFireHit1',
			frames : [{
				key : 'playerFire1',
				frame : 2
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'playerFireHit2',
			frames : [{
				key : 'playerFire2',
				frame : 2
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'playerFireHit3',
			frames : [{
				key : 'playerFire3',
				frame : 2
			}],
			frameRate : 20
		});

		// Enemy bullets
		
		this.anims.create({
			key : 'enemyFire1',
			frames : this.anims.generateFrameNumbers('enemyFire1', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyFire2',
			frames : this.anims.generateFrameNumbers('enemyFire2', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});

		this.anims.create({
			key : 'enemyFire3',
			frames : this.anims.generateFrameNumbers('enemyFire3', {
				start : 0,
				end : 1
			}),
			frameRate : 10,
			repeat : 0
		});

		// Enemy bullet explosions
		
		this.anims.create({
			key : 'enemyFireHit1',
			frames : [{
				key : 'enemyFire1',
				frame : 2
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'enemyFireHit2',
			frames : [{
				key : 'enemyFire2',
				frame : 2
			}],
			frameRate : 20
		});

		this.anims.create({
			key : 'enemyFireHit3',
			frames : [{
				key : 'enemyFire3',
				frame : 2
			}],
			frameRate : 20
		});

		// Ship collide
		this.physics.add.collider(this.enemies, this.gamePlayers, this.shipCollide, this.validCollide);
		this.physics.add.collider(this.enemies, this.enemies, this.shipCollide, this.validCollide);

		// Create bullet groups
		this.playerBullets = this.physics.add.group();
		this.enemyBullets = this.physics.add.group();
		this.physics.add.collider(this.enemies, this.playerBullets, function(obj1, obj2) {
			gameObj.hitTarget(obj1, obj2, "enemyExplode", "playerFireHit");
		}, this.validCollide);
		this.physics.add.collider(this.enemies, this.enemyBullets, function(obj1, obj2) {
			gameObj.hitTarget(obj1, obj2, "enemyExplode", "enemyFireHit");
		}, this.validCollide);
		this.physics.add.collider(this.gamePlayers, this.enemyBullets, function(obj1, obj2) {
			gameObj.hitTarget(obj1, obj2, "playerExplode", "enemyFireHit");
		}, this.validCollide);

		// Handle power ups
		this.physics.add.collider(this.powerups, this.gamePlayers, function(obj1, obj2) {
			gameObj.collectPowerUp(obj1, obj2);
		}, this.validCollide);

		// Handle player attacks
		this.input.on('pointerdown', function() {
			playerFire(gameObj);
		});

		// Spawn timer
		this.time.addEvent({
			delay : 1000,
			callback : secondTimer,
			callbackScope : this,
			loop : true
		});
		
		// Start music
     	var music = this.sound.add('music');
     	music.loop = true;
     	music.play();

		// Save pointer location
		this.lastX = this.input.x;
		this.lastY = this.input.y;
	}

	/**
	 * Checks whether a ship collision is valid
     *
 	 * @param {Object} obj1		Reference to the first ship
 	 * @param {Object} obj2		Reference to the second ship
	 */
	validCollide(obj1, obj2) {
		// Make sure ships exists and are not dead, while also avoiding collisions with themselves
		if (obj1 === undefined || obj1.dead || obj2 === undefined || obj2.dead || obj1 === obj2)
			return false;
			
		// Prevent accidental suicide
		if ((obj1.parent !== undefined && obj1.parent === obj2) || (obj2.parent !== undefined && obj2.parent === obj1))
			return false;
			
		// Boss protected when spawned
		return !((obj1.isEnemy && obj1.isBoss && !obj1.bossReady) || (obj2.isEnemy && obj2.isBoss && !obj2.bossReady));
	}
	
	/**
	 * Lets player collect a power up
	 * 
 	 * @param {Object} powerUp	Reference to the power up object
 	 * @param {Object} player	Reference to the player object
	 */
	collectPowerUp(powerUp, player) {
		// Adjust player stats according to power up type
		switch(powerUp.type) {
			case 1:
				player.hitPoints = player.maxHP;
				break;
			case 2:
				player.hitPoints *= 2;
				debuffTimer = 0;
				break;
			case 3:
				player.damagePoints *= 2;
				debuffTimer = 0;
				break;
		}
		
		// Remove the power up from play
		powerUp.dead = true;
		powerUp.setActive(false);
		powerUp.setVisible(false);
		
		// Play sound effect
		this.sound.play('pickup');
	}

	/**
	 * Handles a bullet hitting a ship
	 * 
	 * @param {Object} target		Ship being hit
	 * @param {Object} bullet		Bullet
	 * @param {String} targetAnim	Ship explode animation prefix
	 * @param {String} bulletAnim	Bullet explode animation prefix
	 */
	hitTarget(target, bullet, targetAnim, bulletAnim) {
		if (bullet === undefined || bullet.dead || target === undefined || target.dead)
			return;

		// Object instance reference
		const gameObj = this;

		// Do the damage
		target.hitPoints -= bullet.damagePoints;

		// Explode bullet
		bullet.anims.play(bulletAnim + bullet.lType, true);
		bullet.on('animationcomplete', function() {
			explodeComplete(gameObj, bullet);
		});

		// Check whether dead
		if (target.hitPoints <= 0) {
			// Explode target
			if (target.isEnemy && target.isBoss)
				target.anims.play(targetAnim + "Boss" + target.bossType, true);
			else
				target.anims.play(targetAnim + target.lType, true);
			this.sound.play('explode');
			target.dead = true;
			if (bullet.parent === this.gamePlayer)
				killEnemy(this);
			target.on('animationcomplete', function() {
				explodeComplete(gameObj, target);
			});
		} else if (target.hitPoints <= 10) {
			// Show damaged ship
			if (target.isEnemy && !target.isBoss) {
				target.anims.play('damaged' + target.lType);	
			}
			
			// Play damage sound
			this.sound.play('hit');
		} else {
			// Play damage sound
			this.sound.play('hit');
		}
	}

	/**
	 * Handles two ships colliding
	 * 
 	 * @param {Object} obj1		Reference to the first ship
 	 * @param {Object} obj2		Reference to the second ship
	 */
	shipCollide(obj1, obj2) {
		// Ensure ships exists and are not dead
		if (obj1 === undefined || obj1.dead || obj2 === undefined || obj2.dead || obj1 == obj2)
			return;
			
		// Bosses don't die so easily
		if (!(obj1.isEnemy && obj1.isBoss)) {
			obj1.dead = true;
			obj1.hitPoints = 0;
			if (obj1 !== this.gamePlayer)
				obj1.anims.play('enemyExplode' + obj1.lType, true);
			else
				obj1.anims.play('playerExplode' + obj1.lType, true);
			obj1.on('animationcomplete', function() {
				explodeComplete(game, obj1);
			});
		}

		// Bosses don't die so easily
		if (!(obj2.isEnemy && obj2.isBoss)) {
			obj2.dead = true;
			obj2.hitPoints = 0;
			if (obj2 !== this.gamePlayer)
				obj2.anims.play('enemyExplode' + obj2.lType, true);
			else
				obj2.anims.play('playerExplode' + obj2.lType, true);
			obj2.on('animationcomplete', function() {
				explodeComplete(game, obj2);
			});
		}
		
		// Play explosion sound effect
		game.sound.play('explode');
	}

	/**
	 * Handles regular game updates
	 */
	update() {
		const cursors = this.input.keyboard.createCursorKeys();

		// Player input
		if (!this.gamePlayer.dead) {
			if (cursors.left.isDown) {
				this.gamePlayer.setVelocityX(-500);
				this.gamePlayer.anims.play('left' + this.gamePlayer.lType, true);
			} else if (cursors.right.isDown) {
				this.gamePlayer.setVelocityX(500);
				this.gamePlayer.anims.play('right' + this.gamePlayer.lType, true);
			} else {
				this.gamePlayer.setVelocityX(0);
				this.gamePlayer.anims.play('playerDefault' + this.gamePlayer.lType);
			}
			if (cursors.up.isDown) {
				this.gamePlayer.setVelocityY(-500);
			} else if (cursors.down.isDown) {
				this.gamePlayer.setVelocityY(500);
			} else {
				this.gamePlayer.setVelocityY(0);
			}

			// Handle pointer input
			let pointerMove = false;
			if (this.input.x < this.gamePlayer.x - 10) {			// Bank left
				this.gamePlayer.anims.play('left' + this.gamePlayer.lType, true);
				pointerMove = true;
			} else if (this.input.x > this.gamePlayer.x + 10) {	// Bank right
				this.gamePlayer.anims.play('right' + this.gamePlayer.lType, true);
				pointerMove = true;
			} else if (this.input.y < this.gamePlayer.y - 10 || this.input.y > this.gamePlayer.y + 10) {	// Fly straight
				this.gamePlayer.anims.play('playerDefault' + this.gamePlayer.lType);
				pointerMove = true;
			}

			// Move the player
			if (pointerMove) {
				this.physics.moveTo(this.gamePlayer, this.input.x, this.input.y, 3000 * this.gamePlayer.fireSpeed);
			}

			// Scroll background
			this.bg.tilePositionY -= 0.2;
			this.stars.tilePositionY -= 0.3;
			this.planets.tilePositionY -= 0.8;
			this.meteors.tilePositionY -= 2.0;
		}

		// Game object reference
		const gameObj = this;

		// Enemy actions
		this.enemies.children.iterate(function(child) {
			// Dead enemies do nothing
			if (child.dead === undefined || child.dead)
				return;

			// Consider attack
			if (Math.random() < 0.2 && !gameObj.gamePlayer.dead && 
				child.y < gameObj.gamePlayer.y && child.y > 100 && Math.abs(child.x - gameObj.gamePlayer.x) < 100) {
				// Check for friendly obstructions (don't shoot friends)
				var attackOK = true;
				gameObj.enemies.children.iterate(function(innerChild) {
					// Skip same enemies
					if (child === innerChild)
						return;		
					// Check for obstructions
					if (innerChild.y > child.y && innerChild.y < gameObj.gamePlayer.y && Math.abs(child.x - innerChild.x) < 100) {
						attackOK = false;
					}
				});
				// Attack
				if (attackOK)
					enemyFire(gameObj, child);
			}
		});

		// Get dimensions		
		const gameWidth = this.cameras.main.width;
		const gameHeight = this.cameras.main.height;
		const halfWidth = gameWidth / 2;
		const halfHeight = gameHeight / 2;

		// Update health & xp bar
		let health = this.gamePlayer.hitPoints / this.gamePlayer.maxHP;
		if (health < 0)
			health = 0;
		if (health > 1)
			health = 1;
			
		// Redraw the health & xp bar
		this.healthbar.clear();
		this.healthbar.lineStyle(5, 0x000000, 1.0);
		this.healthbar.fillStyle((health * 0xff << 8) | (0xff - health * 0xff) << 16, 1.0);
		this.healthbar.fillRect(halfWidth - 100, gameHeight - 60, 200 * health, 20);
		this.healthbar.strokeRect(halfWidth - 100, gameHeight - 60, 200, 20);
		this.healthbar.fillStyle(0xffff00, 1.0);
		this.healthbar.fillRect(halfWidth - 100, gameHeight - 85, 200 * kills / 50, 20);
		this.healthbar.strokeRect(halfWidth - 100, gameHeight - 85, 200, 20);
		
		// Show boss health bar
		if (bossMode && boss !== undefined) {
			let bossHealth = boss.hitPoints / boss.maxHP;
			if (bossHealth < 0)
				bossHealth = 0;
			
			// Redraw the boss health bar
			this.healthbar.lineStyle(5, 0x000000, 1.0);
			this.healthbar.fillStyle((bossHealth * 0xff << 8) | (0xff - bossHealth * 0xff) << 16, 1.0);
			this.healthbar.fillRect(halfWidth - 100, 40, 200 * bossHealth, 20);
			this.healthbar.strokeRect(halfWidth - 100, 40, 200, 20);
		}
	}
}
