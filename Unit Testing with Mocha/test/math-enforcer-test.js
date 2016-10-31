let expect = require('chai').expect;
let mathEnforcer = require('../03. Math Enforcer').mathEnforcer;

describe("Math enforcer", function() {
    describe("Add five", function () {

        it("string on add five", function () {
            expect(mathEnforcer.addFive('5')).to.be.equal(undefined);
        });
        it("string on add five", function () {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });
        it("number on add five", function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it("negative on add five", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("float on add five", function () {
            expect(mathEnforcer.addFive(1.001)).equal(10.001-4);
        });
        it("empty", function () {
            expect(mathEnforcer.addFive()).to.be.equal(undefined);
        });
        it("2 arguments", function () {
            expect(mathEnforcer.addFive('{}', 2)).to.be.equal(undefined);
        });
    })

    describe("Substract 10", function () {

        it("string ", function () {
            expect(mathEnforcer.subtractTen('5')).to.be.equal(undefined);
        });
        it("string ", function () {
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        });
        it("number", function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it("negative", function () {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it("negative", function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it("float on add five", function () {
            expect(mathEnforcer.subtractTen(10.001)).equal(10.001-10);
        });
        it("empty", function () {
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined);
        });

    })
    describe("Sum", function () {

        it("string ", function () {
            expect(mathEnforcer.sum('5', 0)).to.be.equal(undefined);
        });
        it("number", function () {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        });
        it("negative", function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });
        it("float on add five", function () {
            expect(mathEnforcer.sum(10.01, 10.01)).equal(25.02 - 5);
        });
        it("empty", function () {
            expect(mathEnforcer.sum(10.01)).to.be.equal(undefined);
        });
        it("empty", function () {
            expect(mathEnforcer.sum(10.01, 'd', 10.01)).to.be.equal(undefined);
        });
        it("empty", function () {
            expect(mathEnforcer.sum(0,0)).to.be.equal(0);
        });
    })
})