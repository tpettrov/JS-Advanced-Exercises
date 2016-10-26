function solve(){

    let objectOfOccurencies = {};

    for (let i=0; i<arguments.length; i++) {

        let arg = arguments[i];
        let type = typeof (arguments[i]);

        console.log(`${type}: ${arg}`);

        if (!objectOfOccurencies[type]) {

            objectOfOccurencies[type] = 1;
        }
        else {
            objectOfOccurencies[type]++;
        }

    }

    //console.log(objectOfOccurencies);

    let arrToSort = [];

    for(let currtype in objectOfOccurencies ) {

        arrToSort.push([currtype, objectOfOccurencies[currtype]]);

    }

    //console.log(arrToSort);

    arrToSort.sort(extremeSort);


    function extremeSort(a, b){

        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        return 0;

    }

    for(let element of arrToSort ) {

        console.log(`${element[0]} = ${element[1]}`);
    }

}