scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
let runner = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . a a a . . . . 
    . a a a a a a a a 8 8 a a . . . 
    . a 8 8 8 8 8 8 8 8 8 8 a a a . 
    . a 8 2 8 8 8 8 8 2 8 8 8 8 a . 
    . a 8 8 8 8 8 8 8 8 8 2 8 8 a . 
    . a 8 2 2 2 2 2 2 2 2 2 8 a a . 
    . a a a a a a a a a a a a a . . 
    5 5 . 9 9 7 7 7 9 7 9 7 7 . . . 
    4 5 . 9 7 9 7 7 9 7 9 7 7 4 4 4 
    4 4 4 7 7 9 9 7 7 7 9 9 9 . . 4 
    . . . 7 7 7 9 9 9 9 7 7 7 . . . 
    . . . 9 7 7 7 7 7 9 7 7 9 . . . 
    . . . 9 . . . . . . . . 9 9 . . 
    9 9 9 9 . . . . . . . . . 9 9 . 
    9 . . . . . . . . . . . . . . 9 
    `, SpriteKind.Player)
controller.moveSprite(runner, 200, 200)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(runner, assets.tile`myTile0`)
scene.cameraFollowSprite(runner)
info.startCountdown(13)
