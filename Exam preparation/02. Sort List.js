let expect = require('chai').expect;
let assert = require('chai').assert;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}


describe("Sort list", function() {

    describe("create new list", function() {

    it("check new created list", function () {

        let newlist = new SortedList();
        let arr = newlist.list;
        expect(arr).to.be.equal(newlist.list);

    });


        it("class is function", function () {

            expect(typeof(SortedList)).to.equal('function');
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);

        });

});

    describe("Test the add function", function() {

        it("check new created list", function () {

            let newlist = new SortedList();
            newlist.add(5);
            newlist.add(6);
            newlist.add(4);
            expect(newlist.list[0]).to.be.equal(4);
            expect(newlist.list[2]).to.be.equal(6);

        });



});

    describe("Test the remove function", function() {

        it("Working index", function () {

            let newlist = new SortedList();
            newlist.add(5);
            newlist.add(6);
            newlist.add(4);
            newlist.remove(1);
            expect(newlist.list[1]).to.be.equal(6);

        });
        it("Zero index", function () {

            let newlist = new SortedList();
            newlist.add(5);
            newlist.add(6);
            newlist.add(4);
            newlist.remove(0);
            expect(newlist.list[1]).to.be.equal(6);

        });
        it("Last index", function () {

            let newlist = new SortedList();
            newlist.add(5);
            newlist.add(6);
            newlist.add(4);
            newlist.remove(2);
            expect(newlist.list[1]).to.be.equal(5);

        });

        it("Negative index", function () {

            let newlist = new SortedList();
            newlist.add(5);
            newlist.add(6);
            newlist.add(4);

            expect(() => newlist.remove(-1)).to.throw(Error);
            expect(() => newlist.remove(5)).to.throw(Error);

        });

        it("Empty collection", function () {

            let newlist = new SortedList();

            expect(() => newlist.remove(-1)).to.throw(Error);


        });

    });
        describe("Test the get function", function() {

            it("Working index", function () {

                let newlist = new SortedList();
                newlist.add(5);
                newlist.add(6);
                newlist.add(4);

                expect(newlist.get(0)).to.be.equal(4);

            });

            it("Negative and out of array index", function () {

                let newlist = new SortedList();
                newlist.add(5);
                newlist.add(6);
                newlist.add(4);

                expect(() => newlist.get(-1)).to.throw(Error);
                expect(() => newlist.get(5)).to.throw(Error);

            });

            it("Empty collection", function () {

                let newlist = new SortedList();

                expect(() => newlist.get(0)).to.throw(Error);


            });

        });

            describe("Test the size function", function() {

                it("Working index", function () {

                    let newlist = new SortedList();
                    newlist.add(5);
                    newlist.add(6);
                    newlist.add(4);

                    expect(newlist.size).to.be.equal(3);

                });



});

});