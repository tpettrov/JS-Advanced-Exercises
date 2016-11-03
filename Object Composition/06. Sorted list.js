class List {

    constructor(index){

        this.arr = [];
        this.size = 0;


    }

    add(element) {

        this.arr.push(element);
        this.size++;
        return this.arr.sort();
    }

    remove(index){
        if(index >= 0 && index < this.arr.length) {

        this.arr.splice(index, 1);
        this.size--;

        }
        return this.arr.sort();

    }

    get(index){

        return this.arr[index];

    }

    size (){

        return this.size;
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(6);
list.add(1);

list.remove(10);

console.log(list);

