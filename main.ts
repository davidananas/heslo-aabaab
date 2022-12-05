input.onButtonPressed(Button.A, function () {
    USTUP = "" + USTUP + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (heslo == USTUP) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    USTUP = "" + USTUP + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
let USTUP = ""
let heslo = ""
heslo = "AABAAB"
pins.servoWritePin(AnalogPin.P0, 0)
