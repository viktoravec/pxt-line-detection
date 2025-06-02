//Inicializace + vypnutí odporu senzorů
type IRC = {
    left: DigitalPin,
    right: DigitalPin,
    center: DigitalPin
};
const IR: IRC = {
    left: DigitalPin.P14,
    center: DigitalPin.P15,
    right: DigitalPin.P13
};
pins.setPull(IR.left, PinPullMode.PullNone);
pins.setPull(IR.center, PinPullMode.PullNone);
pins.setPull(IR.right, PinPullMode.PullNone)

//Čtení senzorů
let dataL: number;
let dataC: number;
let dataR: number;

basic.forever(function(){
    dataL = pins.digitalReadPin(IR.left);
    dataC = pins.digitalReadPin(IR.center);
    dataR = pins.digitalReadPin(IR.right);

    console.logValue("dataL = ", dataL);
    console.logValue("dataC = ", dataC);
    console.logValue("dataR =", dataR);
    basic.pause(20)
})