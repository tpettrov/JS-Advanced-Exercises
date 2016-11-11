class Melon {

    constructor (weight, melonSort) {

        if (new.target == Melon) {

            throw new TypeError('Abstract class');
        }

        this.weight = weight;
        this.melonSort = melonSort;
        this._elementIndex = this.weight * melonSort.length;
        this.arrayMelon = ["Water","Fire","Earth","Air"];

    }

    get elementIndex(){

        return this._elementIndex;
    }

    toString(){

        return `Element: ${this.constructor.name}
Sort: ${this.melonSort}
Element Index: ${this._elementIndex}
`
    }

}

class Watermelon extends  Melon{

    constructor(weight, melonSort){

        super(weight, melonSort);


    }



}

class Firemelon extends  Melon{

    constructor(weight, melonSort){

        super(weight, melonSort);


    }



}


class Earthmelon extends  Melon{

    constructor(weight, melonSort){

        super(weight, melonSort);


    }



}


class Airmelon extends  Melon{

    constructor(weight, melonSort){

        super(weight, melonSort);


    }



}

let m = new Watermelon(10, 'banica');
console.log(m.toString());