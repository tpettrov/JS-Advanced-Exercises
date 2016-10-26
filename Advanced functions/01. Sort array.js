function solve(arr, criteria){

    let ascFunc = {

        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }


    return arr.sort(ascFunc[criteria]);



}