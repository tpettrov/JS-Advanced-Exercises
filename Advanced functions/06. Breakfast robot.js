let cook = (function cook () {

    let ingredients = {

        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    };

    let recipes = {

        apple: {crabohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat:7, flavour:3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},

    }

    return function solve(input) {

        let [cmd, element, quantity] = input.split(' ');

        if (cmd == 'restock'){
            ingredients[element] += Number(quantity);
            return 'Success';
        }

        else if(cmd == 'prepare'){

            return cooker(element, quantity);

        }

        else if (cmd == 'report') {

            return printer(ingredients);

        }
    }

    function printer(ingredients){

        let string = '';
        let space = ' ';

        for(let thing in ingredients) {

            string += (`${thing}=${ingredients[thing]} `);
        }
        return string.trim();
    }


    function cooker(recipe, quantity) {

        let counter = 0;
        let elementsCount = Object.keys(recipes[recipe]).length;

        for(let ingr in recipes[recipe]){

            if (recipes[recipe][ingr] * quantity > ingredients[ingr]) {

                return `Error: not enough ${ingr} in stock`;
                break;
            }
            else {

                ingredients[ingr] -= recipes[recipe][ingr] * quantity;
                counter++;
            }

        }

        if (counter == elementsCount){
            return 'Success';
        }

    }


}());

console.log(cook('prepare cheverme 1'));
console.log(cook('restock protein 10'));
console.log(cook('prepare cheverme 1'));
console.log(cook('restock carbohydrate 10'));
console.log(cook('prepare cheverme 1'));
console.log(cook('restock fat 10'));
console.log(cook('prepare cheverme 1'));
console.log(cook('restock flavour 10'));
console.log(cook('prepare cheverme 1'));
console.log(cook('report'));
