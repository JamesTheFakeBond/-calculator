input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showLeds(`
        . . . . #
        . # . . #
        # # # . #
        . # . . #
        . . . . #
        `)
    basic.pause(1000)
    basic.showNumber(number_1)
    basic.pause(500)
    basic.clearScreen()
})
// select operation
input.onButtonPressed(Button.AB, function () {
    operation += 1
    if (operation == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation == 3) {
        // multiplication
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation == 4) {
        // division
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation == 5) {
        // square root
        basic.showLeds(`
            . . . # #
            . . . # .
            # # . # .
            . . # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation == 6) {
        // exponent
        basic.showLeds(`
            . . . . #
            . . # . #
            . # # . .
            . . # . .
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
    if (operation >= 8) {
        operation = 0
    }
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showLeds(`
        . . . . #
        . # . . #
        # # # . #
        . # . . #
        . . . . #
        `)
    basic.pause(1000)
    basic.showNumber(number_2)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Answer")
    if (operation == 1) {
        basic.showNumber(number_1 + number_2)
    }
    if (operation == 2) {
        basic.showNumber(number_1 - number_2)
    }
    if (operation == 3) {
        basic.showNumber(number_1 * number_2)
    }
    if (operation == 4) {
        basic.showNumber(number_1 / number_2)
    }
    if (operation == 5) {
        basic.showNumber(Math.sqrt(number_1))
    }
    if (operation == 6) {
        basic.showNumber(number_1 ** number_2)
    }
    basic.pause(1000)
    basic.clearScreen()
    operation = 0
    number_2 = 0
    number_1 = 0
})
let number_2 = 0
let number_1 = 0
let operation = 0
operation = 0
number_1 = 0
number_2 = 0
