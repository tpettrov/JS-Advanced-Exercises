function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


let expect = require('chai').expect;

describe("RGB to text", function() {
    it("working", function() {
        let hex = rgbToHexColor(255, 158, 170);
        expect(hex).to.be.equal('#FF9EAA');
    });
    it("zero", function() {
        let hex = rgbToHexColor(0, 0, 0);
        expect(hex).to.be.equal('#000000');
    });
    it("end", function() {
        let hex = rgbToHexColor(255, 255, 255);
        expect(hex).to.be.equal('#FFFFFF');
    });
    it("blue undefined", function() {
        let hex = rgbToHexColor(-1, 0, 0);
        expect(hex).to.be.undefined;
    });
    it("blue out", function() {
        let hex = rgbToHexColor(256, 0, 0);
        expect(hex).to.be.undefined;
    });
    it("float", function() {
        let hex = rgbToHexColor(3.14, 0, 0);
        expect(hex).to.be.undefined;
    });
    it("no third element", function() {
        let hex = rgbToHexColor(0, 0);
        expect(hex).to.be.undefined;
    });
    it("no numbers", function() {
        let hex = rgbToHexColor("5", [3], {8:9});
        expect(hex).to.be.undefined;
    });
    it("empty", function() {
        let hex = rgbToHexColor();
        expect(hex).to.be.undefined;
    });


});