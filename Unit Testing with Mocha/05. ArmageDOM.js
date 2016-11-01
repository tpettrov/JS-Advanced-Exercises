let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe("Test for nuke(selector1, selector2)", () => {
beforeEach(() => {
    document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`
})


describe("ArmageDom", function() {

    it("equal strings do nothing", function () {
        let beforeExecution = $('body').length;
        nuke(true, true);
        expect($('body').length).to.be.equal(beforeExecution);
    });
    it("equal strings do nothing", function () {
        let beforeExecution = $('body').length;
        nuke('.target', '.target');
        expect($('body').length).to.be.equal(beforeExecution);
    });

    it("invalid selector", function () {
            let beforeExecution = $('#target').length;
                nuke('fuckMeTwiceTonight','.inside');
        expect($('#target').length).to.be.equal(beforeExecution);
    });

    it("only one", function () {
        let beforeExecution = $('#target').length;
        nuke('#target')
        expect($('#target').length).to.be.equal(beforeExecution);
    });

    it("Delete them all", function () {
        let beforeExecutionTarget = $('.target').length;
        let initialNestedTargetCount = $('.target').filter('.inside').length;
        let beforeExecutionInside = $('.inside').length;
        nuke('.target', '.inside' );
        expect($('.target').filter('.inside').length).to.be.equal(0);
        expect($('.target').length).to.be.equal(beforeExecutionTarget - initialNestedTargetCount);
        expect($('.inside').length).to.be.equal(beforeExecutionInside- initialNestedTargetCount);
    });

});

});