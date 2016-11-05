(function (){

    let count = 0;

    class Record {



        constructor(temp, humidity, pressure, wind){

            this.id = count;
            count++;
            this.temperature = temp;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = wind;
            this.weather = (function () {

                if (temp < 20 && wind > 25 && (pressure < 700 || pressure > 900)) {

                    return 'Stormy'

                }

                else return 'Not stormy';

            })();



        }

        toString(){

            return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.weather}
`;

        }


    }

    return Record;


})();





let firstRecord = new Record(32, 66, 760, 12);
let firstRecord1 = new Record(32, 66, 760, 12);
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());