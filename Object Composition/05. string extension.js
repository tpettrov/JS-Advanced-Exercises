(function () {


    String.prototype.ensureStart = function(str) {

        if (this.startsWith(str)) {

            return this.toString()

        } else {return str + this;}

    }

        String.prototype.ensureEnd = function(str){

            if(this.endsWith(str)) {

                return this.toString()

            }
            else return this.toString() + str;

    }

    String.prototype.isEmpty = function(){

        return this == '';

    }

    String.prototype.truncate = function(n){
        if(this.length <= n) {

            return this.toString();
        }

        if (n < 4){

            return '.'.repeat(n);
        }

        if (!this.includes(' ')) {

            return this.slice(0, n - 3) + '...';

        }

        let tokens = this.split(' ');
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {

        if(result.length + tokens[i].length + 4 > n) {

            return result + '...';
        }
            result += ` ${tokens[i]}`
        }



    }

    String.format = function (str,...params) {

        return str.replace(/\{([\d]+)\}/g, function (match, group) {

            if ( params[Number(group)] != undefined) {
                return params[Number(group)];

            }
                return match;

        });

    }



})();


let str = 'strhii';
console.log(String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(String.format('jumps {0} {1}',
    'dog'));
