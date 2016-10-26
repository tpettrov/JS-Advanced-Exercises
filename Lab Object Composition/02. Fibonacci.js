function fibonaci(n){

    let calcPrintFib = (function(){

        let num0 = 0;
        let num1 = 1;

        return ()=> {
            let oldnum0 = num0;
            let oldnum1 = num1;
            num0 = oldnum1;
            num1 = oldnum0 + oldnum1;
            return num0;
        }

    })();

    let arr = [];

    for (let i=0; i<n; i++) {

        arr.push(calcPrintFib());


    }

    return arr;
}