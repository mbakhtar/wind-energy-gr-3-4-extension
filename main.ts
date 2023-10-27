fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
basic.forever(function () {
    basic.showNumber(fwdSensors.dial1.fwdPosition())
})
