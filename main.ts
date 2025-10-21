/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago baker
 * Created on: Oct 2025
 * This program plays rock paper scissers
*/

let randomNumber : number = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function ()
{
    randomNumber = randint(0, 2)
    basic.clearScreen()
    
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
    }

    if (randomNumber == 1) {
        
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    }

    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let scoreNumber : number = 0

input.onButtonPressed(Button.A, function() {
    scoreNumber = scoreNumber + 1
    basic.pause(5000)
})

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.B, function() {
    
    basic.showString("Score:" + scoreNumber)
    basic.pause(5000)
})