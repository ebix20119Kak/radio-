input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("1 :)")
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(3)
    radio.sendString("3 :)")
})
radio.onReceivedString(function (receivedString) {
    radio.setGroup(4)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
    radio.sendString("2 :)")
})
basic.forever(function () {
	
})
