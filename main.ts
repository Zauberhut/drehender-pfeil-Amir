StartbitV2.startbit_Init()
basic.forever(function () {
    StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, pins.map(
    input.acceleration(Dimension.X),
    -1023,
    1023,
    0,
    180
    ), 100)
})
