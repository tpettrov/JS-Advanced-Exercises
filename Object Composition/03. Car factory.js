function carBuilder (carRequired) {

    let carBuilded = {};
    carBuilded.model = carRequired.model;
    carBuilded.engine = engineChooser(carRequired.power);
    carBuilded.carriage = (function() { return {type:carRequired.carriage, color: carRequired.color}})();
    carBuilded.wheels = wheelBuilder(carRequired.wheelsize);

    function engineChooser(reqPower) {

        if (reqPower <= 90) {

            return {power: 90, volume: 1800};
        }
        else if (reqPower <= 120) {

            return {power: 120, volume: 2400};
        }
        else if (reqPower <= 200) {

            return {power: 200, volume: 3500};
        }
        else return {power: 200, volume: 3500};

    }


    function wheelBuilder (size){

        if (size % 2 == 0) {

            size--;
            return [size, size, size, size];

        }
        else {

            return [size, size, size, size];
        }

    }


    return carBuilded;
}


carBuilder({ model: 'VW Golf II',
    power: 210,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);