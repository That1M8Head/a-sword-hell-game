controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isAttacking = 1
    music.knock.play()
    if (controller.left.isPressed()) {
        playerThing.setImage(assets.image`guyWithASword2`)
    } else {
        playerThing.setImage(assets.image`guyWithASword`)
    }
    pause(100)
    isAttacking = 0
    playerThing.setImage(assets.image`guy`)
})
let isAttacking = 0
let playerThing: Sprite = null
scene.setBackgroundColor(15)
playerThing = sprites.create(assets.image`guy`, SpriteKind.Player)
game.showLongText("Welcome to Hell. Press A to attack.", DialogLayout.Bottom)
scene.setBackgroundColor(12)
playerThing.setBounceOnWall(true)
info.setLife(3)
controller.moveSprite(playerThing)
music.playMelody("C C D E D D G A ", 148)
forever(function () {
    if (!(isAttacking)) {
        if (controller.left.isPressed()) {
            playerThing.setImage(assets.image`guy2`)
        } else {
            playerThing.setImage(assets.image`guy`)
        }
    }
})
