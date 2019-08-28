/**


 * MakeCode editor extension for Si7021 humidity/temperature sensors
 * by guowushi@qq.com
 */
//% block="Si7021" weight=20 color=#ff8f3f icon="\uf044"
namespace Si7021 {

    let _temperature: number = 0.0
    let _humidity: number = 0.0
    let _readSuccessful: boolean = false
    let ADDR = 0x40
    /**
     *  Init 
    */
    //% block="Init I2c Address"
    //% blockExternalInputs=true
    export function init(addr: number): void {
        ADDR = addr
    }
    /**
    * Determind if last query is successful (checksum ok)
    */
    //% block="Last query OK?"
    export function readDataOK(): boolean {
        return _readSuccessful
    }
    /**
 * This is an event handler block
 */
    //% block="on event"
    export function onEvent(handler: () => void) {

    }
}

