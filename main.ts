let CapteurGauche = 0
let CapteurDroit = 0
input.onPinPressed(TouchPin.P0, function () {
    if (true) {
        CapteurGauche = 1
    } else {
        CapteurGauche = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (true) {
        CapteurDroit = 1
    } else {
        CapteurDroit = 0
    }
})
basic.forever(function () {
    if (true) {
        CapteurDroit = 1
    } else {
        CapteurDroit = 0
    }
    if (true) {
        CapteurGauche += 1
    } else {
        CapteurGauche = 0
    }
    if (true) {
        CapteurGauche += 1
        basic.showIcon(IconNames.Happy)
    }
    if (true) {
        CapteurDroit += 1
        basic.showIcon(IconNames.Silly)
    } else {
        basic.clearScreen()
    }
    basic.pause(100)
})
