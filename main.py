def on_a_pressed():
    global isAttacking
    isAttacking = 1
    music.knock.play()
    if controller.left.is_pressed():
        playerThing.set_image(assets.image("""
            guyWithASword2
        """))
    else:
        playerThing.set_image(assets.image("""
            guyWithASword
        """))
    pause(100)
    isAttacking = 0
    playerThing.set_image(assets.image("""
        guy
    """))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

isAttacking = 0
playerThing: Sprite = None
scene.set_background_color(15)
playerThing = sprites.create(assets.image("""
    guy
"""), SpriteKind.player)
game.show_long_text("Welcome to Hell. Press A to attack.", DialogLayout.BOTTOM)
scene.set_background_color(12)
playerThing.set_bounce_on_wall(True)
info.set_life(3)
controller.move_sprite(playerThing)
music.play_melody("C C D E D D G A ", 148)

def on_forever():
    if not (isAttacking):
        if controller.left.is_pressed():
            playerThing.set_image(assets.image("""
                guy2
            """))
        else:
            playerThing.set_image(assets.image("""
                guy
            """))
forever(on_forever)
while True:
    print("a")