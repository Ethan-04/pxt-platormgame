namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Rocket.vy += -250
    Trampo.setKind(SpriteKind.object)
    Trampo.x += Math.randomRange(-70, 70)
    Trampo.y += Math.randomRange(-50, -60)
})
let Trampo: Sprite = null
let Rocket: Sprite = null
scene.setBackgroundColor(6)
Rocket = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f d d d f f . . . . 
. . . . f f d 2 d d d f . . . . 
. . . f f d d d d 2 d f . . . . 
. . f f d d d 2 d d d f . . . . 
. f f d d d 2 2 d d d f . . . . 
. 4 f d d 2 2 d d f f . . . . . 
. 4 2 f f d d d f f . . . . . . 
. 4 2 2 f f d f f . . . . . . . 
. 4 5 2 2 f f f . . . . . . . . 
. 2 5 5 5 4 f . . . . . . . . . 
. . 2 5 5 4 . . . . . . . . . . 
. . . . 4 4 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(Rocket)
Rocket.ay = 100
Trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f 3 3 3 3 f 3 3 f 3 3 3 3 f 1 
1 f f f 3 f f 3 3 f f 3 f f f 1 
1 3 3 f 3 f 3 3 3 3 f 3 f 3 3 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.object)
Rocket.setPosition(74, 48)
Trampo.setPosition(74, 118)
game.onUpdate(function () {
    Rocket.x += controller.dx()
})
