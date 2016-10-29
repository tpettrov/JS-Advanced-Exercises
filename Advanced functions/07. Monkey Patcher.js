function solve(commands){

        switch (commands) {

            case 'upvote': this.upvotes++;
                break;
            case 'downvote': this.downvotes++;
                break;
            case 'score': return score(this);
                break;

        };




    function score(obj){

        let adder = 0;
        let result = [];
        let rating = '';
        let score = obj.upvotes - obj.downvotes;
        if (obj.upvotes + obj.downvotes > 50) {

                adder = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);

        }

        if (obj.upvotes + obj.downvotes >= 10) {

            if (score < 0) {

                rating = 'unpopular';
            }
            else if (obj.upvotes / (obj.upvotes + obj.downvotes) > 0.66) {

                rating = 'hot';
            }
            else if (obj.upvotes > 100) {

                rating = 'controversial';
            }
            else rating = 'new';
        }


        else rating = 'new';


        return result = [obj.upvotes + adder, obj.downvotes + adder, score, rating];

    }


};

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};



solve.call(post, 'upvote');
solve.call(post, 'downvote');
console.log(solve.call(post, 'score'));
for (let i = 0; i<50; i++) {

    solve.call(post, 'downvote');
}
console.log(solve.call(post, 'score'));