class Point{

    constructor(x, y){
        this.x = x;
        this.y = y;

    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }



}

let a = new Point(3,4);
let b = new Point(2,5);

console.log(Point.distance(a,b));