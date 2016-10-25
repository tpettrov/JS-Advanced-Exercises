function orderRectangles(rectsData) {

    let rectArr = [];

    for (let [width, height] of rectsData) {

        let rect = createRect(width, height);
        rectArr.push(rect);

    }

    rectArr.sort((a, b) => a.compareTo(b));
    return rectArr;

    function createRect(width, height) {

        let rect = {

            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {

                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }

        };
        return rect;


    }

}




orderRectangles([[1,20],[20,1],[5,3],[5,3]]);