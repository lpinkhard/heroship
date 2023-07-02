/**
 * Hero Ship
 *
 * File:        game.js
 * Purpose:     Game configuration and startup
 *
 * @author      Lionel Pinkhard
 * Date:        May 16, 2019
 * @version     1.0
 *
 * Run on any web server
 */

let game;

// Start when window has finished loading
window.onload = function() {
	// Game config
	const config = {
		type: Phaser.AUTO,
		backgroundColor: "black",
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {
					x: 0,
					y: 0
				}
			}
		},
		scale: {
			parent: 'game',
			fullscreenTarget: 'game',
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 1080,
			height: 1080
		},
		scene: [SceneStart, SceneGame]
	};

	// Start game
    game = new Phaser.Game(config);
};
