namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const goal2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteutils.jumpImpulse(mySprite, 34)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`coral4`, function (sprite, location) {
    set_level_to += 1
})
function call_startLevel (_2: number) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
	
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f 9 9 9 9 9 f . . . 
    . . . . . f 9 9 9 1 1 1 1 f . . 
    . . . . f f 9 9 1 f 1 1 f 1 2 . 
    . . . f 1 1 9 9 1 f 1 1 f 1 2 . 
    . . . 2 1 2 9 9 1 1 1 1 9 9 1 2 
    f f . 2 1 2 9 9 1 1 2 1 1 1 1 2 
    f 9 f . 2 f 9 9 1 1 2 2 2 2 2 2 
    f 9 f . . f f 9 1 1 1 1 1 1 f . 
    f 9 f . f 9 9 9 9 f f f f f . . 
    f 9 f f 9 9 9 9 9 9 9 f . . . . 
    . f f 9 9 9 9 f 9 f f 9 f . . . 
    . . f 9 9 9 9 f 9 f f 9 f . . . 
    . . . f 9 f 9 2 1 f 2 1 f . . . 
    . . . f 1 2 2 1 1 2 1 1 f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 80, 0)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . f a a a a f f f . . . 
    . . . . f f a a a a a f f . . . 
    . . . f a a f a a a a a f f . . 
    . . f a a a a f a a a a f f f f 
    . f f a a a a f f f a a f a a f 
    . f a a a a a f a a f a f f a f 
    f a a a a f a f f a f a f f a f 
    f a a a a a a f a f f a f f a f 
    . f a a a a a a a a a f f f f f 
    . . f f f f a a a a f f f f . . 
    . . . . . f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.vy += 100
mySprite.ay = 300
myEnemy.follow(mySprite, 80)
spriteutils.placeAngleFrom(
myEnemy,
10,
50,
mySprite
)
info.setLife(3)
let set_level_to = 1
