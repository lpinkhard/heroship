/**
 * Hero Ship
 *
 * File:        attack.js
 * Purpose:     Handles functionality related to player and enemy ship attacks
 *
 * @author      Lionel Pinkhard
 * Date:        May 16, 2019
 * @version     1.0
 *
 * Run on any web server
 */

let kills = 0;

/**
 * Fire a bullet from the player's ship
 * 
 * @param {Object} gameObj	Reference to the main game object
 */
function playerFire(gameObj) {
	// Check that the player is alive and has not exceeded the firing speed
	if (!gameObj.gamePlayer.dead && gameObj.gamePlayer.lastFire < Date.now() - 50 / gameObj.gamePlayer.fireSpeed) {
		// Create a new bullet
		const bullet = gameObj.playerBullets.create(gameObj.gamePlayer.x, gameObj.gamePlayer.y - 75, 'playerFire');

		// Play animation and sound effect
		bullet.anims.play('playerFire' + gameObj.gamePlayer.type);
		gameObj.sound.play('shoot1');
		
		// Track who shot the bullet
		bullet.parent = gameObj.gamePlayer;
		
		// Adjust bullet according to player level
		const level = gameObj.gamePlayer.level;
		const multiplier = Math.pow(1.2, level);
		bullet.setSize(33 * multiplier, 60 * multiplier);
		bullet.setScale(multiplier);
		bullet.lType = '' + gameObj.gamePlayer.type;
		bullet.damagePoints = gameObj.gamePlayer.damagePoints;
		
		// Set the bullet on its way
		bullet.setVelocityY(-1500 * gameObj.gamePlayer.fireSpeed - 100);
		gameObj.gamePlayer.lastFire = Date.now();
	}
}

/**
 * Fire a bullet from an enemy ship
 * 
 * @param {Object} gameObj	Reference to the main game object
 * @param {Object} enemy		Reference to the enemy sprite object
 */
function enemyFire(gameObj, enemy) {
	// Set firing rate with minimum
	let attackSpeed = enemy.fireSpeed;
	if (attackSpeed < 0.2)
		attackSpeed = 0.2;
		
	// Check that the enemy is alive and has not exceeded the firing speed
	if (!enemy.dead && enemy.lastFire < Date.now() - 250 / attackSpeed) {
		// Create a new bullet
		const bullet = gameObj.enemyBullets.create(enemy.x, enemy.y + enemy.height / 2 + 50, 'enemyFire' + enemy.lType.substring(1));

		// Play animation and sound effect
		bullet.anims.play('enemyFire' + enemy.lType.substring(1));
		gameObj.sound.play('shoot2');
		
		// Track who shot the bullet
		bullet.parent = enemy;

		// Adjust bullet according to enemy level
		bullet.lType = enemy.lType;
		const level = parseInt(enemy.lType.substring(0, 1));
		const multiplier = Math.pow(1.2, level);
		bullet.setSize(33 * multiplier, 60 * multiplier);
		bullet.setScale(multiplier);
		bullet.damagePoints = enemy.damagePoints;

		// Set the bullet on its way
		bullet.setVelocityY(1500 * enemy.fireSpeed + 100);
		enemy.lastFire = Date.now();
	}
}

/**
 * Creates a new player ship 
 * 
 * @param {Object} gameObj	Reference to the main game object
 * @param {Number} level		Ship level		
 * @param {Number} type		Ship type
 */
function setPlayer(gameObj, level, type) {
	// Remove existing ship from play
	gameObj.gamePlayer.setActive(false);
	gameObj.gamePlayer.setVisible(false);	

	// Set the level and type
	const lType = '' + level + '' + type;

	// Create the new player sprite
	gameObj.gamePlayer = gameObj.gamePlayers.create(gameObj.cameras.main.width / 2, gameObj.cameras.main.height - 75, 'player' + lType);
	gameObj.gamePlayer.setCollideWorldBounds(true);
	gameObj.gamePlayer.setSize(105, 85);
	gameObj.gamePlayer.lastFire = Date.now();
	gameObj.gamePlayer.isEnemy = false;
	gameObj.gamePlayer.level = level;
	gameObj.gamePlayer.type = type;
	gameObj.gamePlayer.lType = lType;
	gameObj.gamePlayer.dead = false;

	// Calculate stat multiplier based on level
	const multiplier = Math.pow(1.2, gameObj.gamePlayer.level);

	// Set stats according to ship type
	switch(gameObj.gamePlayer.type) {
		case 1:
			gameObj.gamePlayer.hitPoints = 50 * multiplier;
			gameObj.gamePlayer.maxHP = 50 * multiplier;
			gameObj.gamePlayer.damagePoints = 5 * multiplier;
			gameObj.gamePlayer.maxDamage = 5 * multiplier;
			gameObj.gamePlayer.fireSpeed = 0.22 * multiplier;
			break;
		case 2:
			gameObj.gamePlayer.hitPoints = 100 * multiplier;
			gameObj.gamePlayer.maxHP = 100 * multiplier;
			gameObj.gamePlayer.damagePoints = 10 * multiplier;
			gameObj.gamePlayer.maxDamage = 10 * multiplier;
			gameObj.gamePlayer.fireSpeed = 0.11 * multiplier;
			break;
		case 3:
			gameObj.gamePlayer.hitPoints = 25 * multiplier;
			gameObj.gamePlayer.maxHP = 25 * multiplier;
			gameObj.gamePlayer.damagePoints = 3 * multiplier;
			gameObj.gamePlayer.maxDamage = 3 * multiplier;
			gameObj.gamePlayer.fireSpeed = 0.45 * multiplier;
			break;
	}	
}

/**
 * Removes an exploded sprite from play
 * 
 * @param {Object} gameObj	Reference to the main game object
 * @param {Object} obj		Reference to the object that exploded
 */
function explodeComplete(gameObj, obj) {
	obj.setActive(false);
	obj.setVisible(false);	
}

/**
 * Awards kills for destroying an enemy ship and level up as needed
 * 
 * @param {Object} gameObj	Reference to the main game object
 */
function killEnemy(gameObj) {
	// Increment kills
	kills++;
	
	// Possibly spawn a power up
	addPowerUp(gameObj);
	
	// Level up on 50 kills
	if (kills === 50) {
		gameObj.gamePlayer.level++;
		// Maximum level 5
		if (gameObj.gamePlayer.level > 5)
			gameObj.gamePlayer.level = 5;
		else
			kills = 0;
			
		// Create new player ship
		setPlayer(gameObj, gameObj.gamePlayer.level, gameObj.gamePlayer.type);
	}
}
