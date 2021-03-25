/**
 * p0 green
 * 
 * p1 yellow
 * 
 * p2 red
 */
// up arrow means walk, count down means the light is going to change to red soon and x means don't walk.
input.onButtonPressed(Button.A, function () {
    case_select += 1
    if (case_select == 1) {
        basic.showNumber(1)
    } else if (case_select == 2) {
        basic.showNumber(2)
    } else if (case_select == 3) {
        basic.showNumber(3)
    } else if (case_select == 4) {
        basic.showNumber(4)
    } else if (case_select == 5) {
        case_select = 1
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.B, function () {
    _case = case_select
    while (_case == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(10000)
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(5)
        basic.pause(500)
        basic.showNumber(4)
        basic.pause(500)
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(10000)
    }
    while (_case == 2) {
    	
    }
})
let _case = 0
let case_select = 0
case_select = 0
_case = 0
