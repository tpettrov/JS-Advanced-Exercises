let Extensible = (function(){

    let id = 0;

        class Extensible{

            constructor(){

                this.id = id;
                id++;
            }

            extend(template) {

                    for (let prop in template) {

                        if (typeof(template[prop]) == "function") {

                            Object.getPrototypeOf(this)[prop] = template[prop];
                        }

                        this[prop] = template[prop];

                    }


            }

        }


    return Extensible;

})();


let obj = new Extensible();
let obj1 = new Extensible();
let obj2 = new Extensible();
console.log(obj.id);
console.log(obj1.id);
console.log(obj2.id);
