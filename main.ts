/**
 * MakeCode editor extension for Si7021 humidity/temperature sensors
 * by guowushi@qq.com
 */
//% block="Si7021" weight=100 color=#ff8f3f icon="\uf043"
namespace Si7021 {

    let _temperature: number = 0.0
    let _humidity: number = 0.0
    let _readSuccessful: boolean = false

    /**
    * Determind if last query is successful (checksum ok)
    */
    //% block="Last query successful?"
    export function readDataSuccessful(): boolean {
        return _readSuccessful
    }
}

