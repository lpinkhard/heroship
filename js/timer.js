/**
 * Hero Ship
 *
 * File:        timer.js
 * Purpose:     Handles timed functionality within the game
 *
 * @author      Lionel Pinkhard
 * Date:        May 16, 2019
 * @version     1.0
 *
 * Run on any web server
 */
let minuteTimer = 0;
let bossTimer = 0;
let debuffTimer = 0;

// Game state
let bossMode = false;
let boss = undefined;
let gameLevel = '1';
let levelLimit = 1;

/**
 * Adds a power up to the game (1% probability)
 * 
 * @param {Object} gameObj	Reference to the main game object
 */
function addPowerUp(gameObj) {
	// Don't bother if player is dead
	if (gameObj.gamePlayer.dead)
		return false;
	
	// 1% probability
	let rand = Math.random();
	if (rand < 0.01)
		return false;

	// Select type of power-up
	rand = Math.random();
	let type = 1;
	if (rand < 0.33)
		type = 2;
	else if (rand < 0.66)
		type = 3;
			
	// Offset for random spawn
	const xOffset = 100;
	// Ensure space to spawn
	const spawnLimit = gameObj.cameras.main.width - xOffset - 100;

	// Calculate location
	const spawnX = xOffset + Math.random() * spawnLimit;

	// Create power up
	let powerUpSprite;
	switch (type) {
		case 1:
			powerUpSprite = 'restore';
			break;
		case 2:
			powerUpSprite = 'double';
			break;
		case 3:
			powerUpSprite = 'damage';
			break;
	}

	const powerUp = gameObj.powerups.create(spawnX, -100, powerUpSprite);
	powerUp.type = type;
	powerUp.isEnemy = false;
	powerUp.dead = false;
	powerUp.setVelocityY(300);

	// Clean up
	gameObj.powerups.children.iterate(function(child) {
		if (child !== undefined && !child.active)
			child.destroy();
	});
	
	return true;
}

/**
 * Add enemies to the game (50% probability)
 * 
 * @param {Object} gameObj	Reference to the main game object
 */
function addEnemies(gameObj) {
	// Don't bother if player is dead
	if (gameObj.gamePlayer.dead)
		return false;
	
	// 50% probability
	let rand = Math.random();
	if (rand < 0.5)
		return false;

	// Number of enemies to spawn (Random between 1 and 6, depending on level)
	const spawnNumber = Math.floor((Math.random() * (2 + parseInt(gameLevel))) + 1);

	// Calculate level & type
	const level = '' + Math.ceil(Math.random() * levelLimit);
	let type = '1';

	// Select type of enemy
	rand = Math.random();
	if (rand < 0.33)
		type = '2';
	else if (rand < 0.66)
		type = '3';

	const lType = level + type;

	// Offset for random spawn
	let xOffset = 100;
	for (let i = 0; i <= spawnNumber; i++) {
		// Ensure space to spawn
		const spawnLimit = gameObj.cameras.main.width - xOffset - 100;
		if (spawnLimit < 200)
			continue;

		// Calculate location
		const spawnX = xOffset + Math.random() * spawnLimit;
		xOffset = spawnX + 100;

		// Create enemy
		const enemy = gameObj.enemies.create(spawnX, -100, 'enemy' + lType);
		enemy.lType = lType;
		const multiplier = Math.pow(1.2, parseInt(level));
		switch (parseInt(type)) {
			case 1:
				enemy.setSize(80, 75);
				enemy.hitPoints = 10 * multiplier;
				enemy.damagePoints = multiplier;
				enemy.fireSpeed = 0.4 * multiplier;
				break;
			case 2:
				enemy.setSize(65, 105);
				enemy.hitPoints = 20 * multiplier;
				enemy.damagePoints = 2 * multiplier;
				enemy.fireSpeed = 0.18 * multiplier;
				break;
			case 3:
				enemy.setSize(85, 105);
				enemy.hitPoints = 40 * multiplier;
				enemy.damagePoints = 4 * multiplier;
				enemy.fireSpeed = 0.1 * multiplier;
				break;
		}
		
		// Put enemy in motion
		enemy.setVelocityX(-50 * enemy.fireSpeed + Math.random() * 100 * enemy.fireSpeed);
		enemy.setVelocityY(200 * enemy.fireSpeed + Math.random() * 200 * enemy.fireSpeed);
		enemy.lastFire = Date.now();
		enemy.isEnemy = true;
		enemy.isBoss = false;
		enemy.bossReady = false;
		enemy.dead = false;
	}

	// Clean up
	gameObj.enemies.children.iterate(function(child) {
		if (child !== undefined && !child.active)
			child.destroy();
	});
	gameObj.playerBullets.children.iterate(function(child) {
		if (child !== undefined && !child.active)
			child.destroy();
	});
	gameObj.enemyBullets.children.iterate(function(child) {
		if (child !== undefined && !child.active)
			child.destroy();
	});
	
	return true;
}

/**
 * Adds a boss enemy to the game (always)
 * 
 * @param {Object} gameObj	Reference to the main game object
 */
function addBoss(gameObj) {
	// Don't bother if player is dead
	if (gameObj.gamePlayer.dead)
		return false;
		
	// Level/type attributes
	let level = '1';
	let type = '1';
	switch(parseInt(gameLevel)) {
		case 1:
			level = '1';
			type = '2';
			break;
		case 2:
			level = '1';
			type = '1';
			break;
		case 3:
			level = '2';
			type = '3';
			break;
		case 4:
			level = '3';
			type = '1';
			break;
	}
	const lType = level + type;

	// Set spawn location
	const spawnX = gameObj.cameras.main.width / 2;
	const enemy = gameObj.enemies.create(spawnX, -300, 'boss' + gameLevel);

	// Adjust stats according to specific boss
	enemy.lType = lType;
	switch (parseInt(type)) {
		case 1:
			enemy.setSize(528, 261);
			// Type 1 has two different levels
			if (parseInt(level) === 3) {
				enemy.bossType = '4';
				enemy.hitPoints = 320;
				enemy.maxHP = 320;
				enemy.damagePoints = 5;
				enemy.fireSpeed = 1.44;
			} else {
				enemy.hitPoints = 222;
				enemy.maxHP = 222;
				enemy.damagePoints = 3;
				enemy.fireSpeed = 1;
				enemy.bossType = '2';
			}
			break;
		case 2:
			enemy.setSize(540, 310);
			enemy.hitPoints = 500;
			enemy.maxHP = 500;
			enemy.damagePoints = 5;
			enemy.fireSpeed = 0.45;
			enemy.bossType = '1';
			break;
		case 3:
			enemy.setSize(516, 552);
			enemy.hitPoints = 1196;
			enemy.maxHP = 1196;
			enemy.damagePoints = 12;
			enemy.fireSpeed = 0.3;
			enemy.bossType = '3';
			break;
	}
		
	// Move the boss into the playing area
	gameObj.physics.moveTo(enemy, spawnX, 300, 250);
	enemy.lastFire = Date.now();
	enemy.isEnemy = true;
	enemy.isBoss = true;
	enemy.body.mass = 2;
	enemy.dead = false;
	
	// Track the current boss
	boss = enemy;
	
	return true;
}

/**
 * Ends the level with a boss fight
 * 
 * @param {Object} gameObj	Reference to main game object
 */
function endLevel(gameObj) {
	bossMode = true;
	gameObj.gamePlayer.hitPoints = gameObj.gamePlayer.maxHP;
}

/**
 * Advances to the next level
 * 
 * @param {Object} gameObj	Reference to main game object
 */
function advanceLevel(gameObj) {
	// Reset boss fight
	bossMode = false;
	boss = undefined;
	
	// Reset hit points and increment level
	gameObj.gamePlayer.hitPoints = gameObj.gamePlayer.maxHP;
	const newLevel = parseInt(gameLevel) + 1;

	// Check max level
	if (newLevel > 4) {
		// Victory
		this.victoryText = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'escaped');
			
		// Restart button
		this.restartBtn = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height * 0.75, 'restart');
		this.restartBtn.setInteractive();
    		this.restartBtn.on('pointerdown', function() {
    			// Reset variables
    			kills = 0;
			minuteTimer = 0;
			bossTimer = 0;
			debuffTimer = 0;
			bossMode = false;
			boss = undefined;
			gameLevel = '1';
			levelLimit = 1;

			// Restart scene
    			game.scene.stop('SceneGame');
   			game.scene.start('SceneGame');
    		}, this);
	} else {
		// Increase game and enemy levels
		gameLevel = '' + newLevel;
		levelLimit += 2;
		if (levelLimit > 6)
			levelLimit = 6;

		// Update backgrounds
		gameObj.bg.setTexture('background' + gameLevel);
		gameObj.stars.setTexture('stars' + Math.ceil(parseInt(gameLevel) / 2));
		gameObj.planets.setTexture('planets' + gameLevel);
	}
}

/**
 * Called every second to perform regular actions
 */
function secondTimer() {
	// Handle boss mode
	if (bossMode) {
		if (boss === undefined) {
			// No boss, add one after 5 seconds
			bossTimer++;
			if (bossTimer >= 5) {
				// Add the boss and reset the timer
				addBoss(this);
				bossTimer = 0;
			}
		} else if (boss.dead) {
			// Boss dead, move on
			advanceLevel(this);
		} else {
			// Move the boss around randomly
			var moveX = (this.cameras.main.width - 600) * Math.random() + 300;
			this.physics.moveTo(boss, moveX, 300, 250);
			boss.bossReady = true;
		}
	} else {
		// Add enemies to the game
		addEnemies(this);
	}

	// Horizontal movements
	const displayHeight = this.cameras.main.height;
	const velX1 = -200 + Math.random() * 400;
	const velX2 = -200 + Math.random() * 400;

	// Handle timed events
	this.enemies.children.iterate(function(child) {
		if (child.dead === undefined || child.dead)
			return;

		// Restore velocity
		if (!child.isBoss) {
			if (child.y < displayHeight * 0.25 || child.y > displayHeight * 0.75)
				child.setVelocity(velX1);
			else
				child.setVelocityX(velX2);
			child.setVelocityY(100 + Math.random() * 100);
		}
	});
	
	// Update and run minute and debuff timer
	if (!bossMode) {
		minuteTimer++;
		if (minuteTimer >= 60) {
			minuteTimer = 0;
			endLevel(this);
		}
		debuffTimer++;
		if (debuffTimer === 5) {
			// Remove power up effects
			this.gamePlayer.damagePoints = this.gamePlayer.maxDamage;
			this.gamePlayer.hitPoints = Math.min(this.gamePlayer.maxHP, this.gamePlayer.hitPoints);
		}
	}
	
	// Respawn player
	if (this.gamePlayer.dead) {
		if (this.gamePlayer.type < 3) {
			setPlayer(this, 1, this.gamePlayer.type + 1);
		} else {
			// Game over
			this.gameoverText = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'gameover');
			
			// Restart button
			this.restartBtn = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height * 0.75, 'restart');
			this.restartBtn.setInteractive();
     		this.restartBtn.on('pointerdown', function() {
     			// Reset variables
     			kills = 0;
				minuteTimer = 0;
				bossTimer = 0;
				debuffTimer = 0;
				bossMode = false;
				boss = undefined;
				gameLevel = '1';
				levelLimit = 1;

				// Restart scene
     			game.scene.stop('SceneGame');
     			game.scene.start('SceneGame');
     		}, this);
		}
	}

}
