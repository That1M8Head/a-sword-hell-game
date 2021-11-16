controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.askForString("Do you want to die?") == "yes") {
        game.over(false, effects.melt)
    } else {
        game.showLongText("Okay, have a nice day", DialogLayout.Full)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isAttacking = 1
    music.knock.play()
    if (facingLeft) {
        playerThing.setImage(assets.image`guyWithASword2`)
    } else {
        playerThing.setImage(assets.image`guyWithASword`)
    }
    pause(100)
    isAttacking = 0
    if (facingLeft) {
        playerThing.setImage(assets.image`guy2`)
    } else {
        playerThing.setImage(assets.image`guy`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isAttacking)) {
        facingLeft = 1
        playerThing.setImage(assets.image`guy2`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isAttacking)) {
        facingLeft = 0
        playerThing.setImage(assets.image`guy`)
    }
})
let facingLeft = 0
let isAttacking = 0
let playerThing: Sprite = null
scene.setBackgroundColor(15)
game.showLongText("Welcome to Hell. Press A to attack. Or press B to die.", DialogLayout.Bottom)
playerThing = sprites.create(assets.image`guy`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Background`)
info.setLife(3)
playerThing.setBounceOnWall(true)
controller.moveSprite(playerThing)
music.playMelody("C C D E D D G A ", 148)
