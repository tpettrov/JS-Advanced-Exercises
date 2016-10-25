function commandProcessor(input) {

    let selfinvoked = (function (){

        let scopeStr = '';

        return  {

            append: (arg) => scopeStr += arg,
            removeStart: (arg) => scopeStr = scopeStr.slice(arg),
            removeEnd: (arg) => scopeStr = scopeStr.slice(0, scopeStr.length - arg),
            print: () => console.log(scopeStr)

        }

    })();


        for (let cmd of input) {

             let [com, arg] = cmd.split(' ');
            selfinvoked[com](arg);

        }

}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);



/*
command(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);*/
