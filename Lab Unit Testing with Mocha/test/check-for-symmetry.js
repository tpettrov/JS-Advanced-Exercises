let expect = require('chai').expect;
let isSymmetric = require('../02. Check for symmetry').isSymmetric;


describe("check array for symmetry", function() {
    it("should false if no array", function() {
        expect(isSymmetric({})).to.be.equal(false);
    });
    it("should false if no array", function() {
        expect(isSymmetric(1,2,3,4)).to.be.equal(false);
    });
    it("should true if  array", function() {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it("should false if  unvalid data", function() {
        expect(isSymmetric(['haha', {}, 'vui'])).to.be.equal(false);
    });
    it("should false if  unvalid data", function() {
        expect(isSymmetric(['haha', {}, 'vui', {}, 'haha'])).to.be.equal(true);
    });
    it("should false if  unvalid data", function() {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true);
    });
    it("should false if  unvalid data", function() {
        expect(isSymmetric([1,2])).to.be.equal(false);
    });
    it("should false if  unvalid data", function() {
        expect(isSymmetric([1])).to.be.equal(true);
    });

});