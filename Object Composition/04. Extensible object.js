function solve(){

    let myObj = {};
    myObj.extend = function(template){

        for (let prop in template) {

            if (typeof(template[prop]) == "function") {

                Object.getPrototypeOf(myObj)[prop] = template[prop];
            }

            myObj[prop] = template[prop];

        }

    }


    return myObj;


};


let template =  {
    extensionMethod: function () {console.log('function from template')},
    extensionProperty: 'someString'
};

let returnedObj = solve();
returnedObj.extend(template);
console.log(returnedObj);