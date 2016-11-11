let expect = require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

describe("Add delete", function() {


    it("List is object", function() {
        expect(typeof(list)).to.equal('object');
    });

});
describe("Test empty", function() {
    it("Return empty array", function() {

        expect(list.toString()).to.equal('');
    });

    it("add 1", function() {
        list.add(1);
        expect(list.toString()).to.equal('1');
        list.delete(0);
        expect(list.toString()).to.equal('');
    });

    it("invalid negative index on delete", function() {
        list.add('pesho');
        list.add(1);
        expect(list.delete(-1)).to.equal(undefined);
        expect(list.toString()).to.equal('pesho, 1');


    });
    it("invalid big index on delete", function() {

        expect(list.delete(10)).to.equal(undefined);
        expect(list.toString()).to.equal('pesho, 1');
    });
    it("invalid non integer index on delete", function() {

        expect(list.delete(1.5)).to.be.equal(undefined);
    });

    it("invalid string index on delete", function() {

        expect(list.delete('dsadsa')).to.be.equal(undefined);
    });
    it("invalid object on delete", function() {

        expect(list.delete({})).to.be.equal(undefined);
    });

});