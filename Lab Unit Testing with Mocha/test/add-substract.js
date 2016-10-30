let expect = require('chai').expect;
let createCalculator = require('../04. Add substract').createCalculator;


describe("createCalculator", function() {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it("working", function () {
        calc.add(2); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(4);
    });

    it("zero", function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("1", function () {
        calc.subtract(1); let value = calc.get();
        expect(value).to.be.equal(-1);
    });
    it("no argument", function () {
        calc.subtract(); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("string", function () {
        calc.subtract('hello'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("string", function () {
        calc.subtract('-1'); calc.add('1');let value = calc.get();
        expect(value).to.be.equal(2);
    });

    });