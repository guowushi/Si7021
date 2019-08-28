/**


 * MakeCode editor extension for Si7021 humidity/temperature sensors
 * by guowushi@qq.com
 */
//% block="Si7021" weight=20 color=#ff8f3f icon="\uf044"
namespace Si7021 {

    let _temperature: number = 0.0
    let _humidity: number = 0.0
    let _readSuccessful: boolean = false
     

    let SI7021_ADDRESS                 = 0x40;
    let SI7021_RESET_CMD               = 0xFE;
    let SI7021_READRHT_REG_CMD         = 0xE7;
    let  SI7021_MEASURE_TEMP_NOHOLD_CMD = 0xF3;
    let SI7021_MEASURE_HUM_NOHOLD_CMD  = 0xF5;
    let SI7021_USER_REG_DEFAULT        = 0x3A;

    //% block="Init I2c Address"
    //% blockExternalInputs=true
    export function init(addr: number): void {
        SI7021_ADDRESS = addr;
    }
     //% block="Reset Sensor"
    export function reset():void {
        pins.i2cWriteNumber(SI7021_ADDRESS, SI7021_RESET_CMD,   NumberFormat.Int8LE,  false  )
    }

    //% block="Read  Temperature (BE)"
    export function readTemperature():number{
        pins.i2cWriteNumber(SI7021_ADDRESS,   SI7021_MEASURE_TEMP_NOHOLD_CMD,   NumberFormat.Int8LE,    false  )
       
      let rawdata= pins.i2cReadNumber(SI7021_ADDRESS, NumberFormat.Int16LE, false);
       _temperature = (((rawdata * 175.72) / 65536) - 46.85);
       return  _temperature;

    }
    //% block="Read  Humidity (BE)"
    export function readHumidity():number{
        pins.i2cWriteNumber(SI7021_ADDRESS,   SI7021_MEASURE_HUM_NOHOLD_CMD,   NumberFormat.Int8LE,    false  )
       let rawdata = pins.i2cReadNumber(SI7021_ADDRESS, NumberFormat.Int16LE, false);
      
         _humidity   = (((rawdata * 125) / 65536) - 6);
        return _humidity;
    }

}

