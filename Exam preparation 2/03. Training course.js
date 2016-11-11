class TrainingCourse {
    constructor(title, trainer) {

        this.title = title;
        this.trainer = trainer;
        this.topics = [];

    }


    addTopic(title, date) {

        this.topics.push({title, date});
        this.topics.sort(function(a,b) {

            if (a.date > b.date ) return 1;
            else if(b.date > a.date) return -1;
            else return 0;


        });

    }

    get firstTopic (){

        return this.topics[0];

    }


    get lastTopic (){

        return this.topics[this.topics.length-1];

    }

    toString(){

        let print = '';

        this.topics.forEach(function(element){

            print += ` * ${element.title} - ${element.date}\n`

        });

        if (this.topics.length == 0) {

            return `Course "${this.title}" by ${this.trainer}\n`;

        }


        else return `Course "${this.title}" by ${this.trainer}` + print;


    }
}

/*let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);*/
/*let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);*/
let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0));
console.log(php);

