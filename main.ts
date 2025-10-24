/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program plays rock, paper, scissers.
*/

// variables
let randomNumber : number = null
let scoreNumber: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shake icons
input.onGesture(Gesture.Shake, function () {
    // get randomNumber
    randomNumber = randint(0, 2)
    basic.clearScreen()
    
    // rock icon
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
    }
    
    // paper icon
    if (randomNumber == 1) {
        
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    }
    
    // scissers icon
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

// add win to score
input.onButtonPressed(Button.A, function() 
{
    basic.clearScreen()
    scoreNumber = scoreNumber + 1
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

// show score
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString("Score:" + scoreNumber)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})
