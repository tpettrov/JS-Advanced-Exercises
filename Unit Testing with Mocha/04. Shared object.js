let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};



describe("sharedOnject initial state", function() {

    it("No string", function () {

        expect(sharedObject.name).to.equal(null);
        expect(sharedObject.income).to.equal(null);
    });

    it("No string", function () {
        sharedObject.name = 'Tet';
        sharedObject.income = 'Income';
        expect(sharedObject.name).to.be.equal('Tet');
        expect(sharedObject.income).to.be.equal('Income');
    });

    describe("changeName", function () {

        it("emptyString", function () {
            let oldObjectName = sharedObject.name;
            let oldTextBoxName = $('#name').val();
            sharedObject.changeName('');
            expect(oldObjectName).to.equal(sharedObject.name);
            expect(oldTextBoxName).to.equal($('#name').val());

        });

        it("String", function () {
            sharedObject.changeName('Anton');
            expect(sharedObject.name).to.be.equal('Anton');
            expect($('#name').val()).to.be.equal('Anton');

        });


    });

    describe("change Income", function () {

        it("Negative Number", function () {

            let oldValueIncome = sharedObject.income;
            let oldValueIncometext = $('#income').val();
            sharedObject.changeIncome(-6);
            expect(sharedObject.changeIncome(-6)).to.be.equal(undefined);
            expect(oldValueIncome).to.be.equal(sharedObject.income);
            expect(oldValueIncometext).to.be.equal($('#income').val());

        });
        it("Float Number", function () {

            let oldValueIncome = sharedObject.income;
            let oldValueIncometext = $('#income').val();
            sharedObject.changeIncome(6.1);
            expect(sharedObject.changeIncome(6.1)).to.be.equal(undefined);
            expect(oldValueIncome).to.be.equal(sharedObject.income);
            expect(oldValueIncometext).to.be.equal($('#income').val());

        });
        it("Zero", function () {
            let oldValueIncome = sharedObject.income;
            let oldValueIncometext = $('#income').val();
            sharedObject.changeIncome(0);
            expect(sharedObject.changeIncome(0)).to.equal(undefined);
            expect(oldValueIncome).to.be.equal(sharedObject.income);
            expect(oldValueIncometext).to.be.equal($('#income').val());
        });

        it("Zero", function () {
            let oldValueIncome = sharedObject.income;
            let oldValueIncometext = $('#income').val();
            sharedObject.changeIncome()
            expect(sharedObject.changeIncome()).to.be.equal(undefined);
            expect(oldValueIncome).to.be.equal(sharedObject.income);
            expect(oldValueIncometext).to.be.equal($('#income').val());
        });

        it("String", function () {
            sharedObject.changeIncome(5);
            let textinHtml = $('#income').val();
            expect(sharedObject.income).to.be.equal(5);
            expect(textinHtml).to.be.equal('5');

        });

    });
    describe("Update name", function () {

        it("Empty name in textbox", function () {

            $('#name').val('');
            expect(sharedObject.updateName()).to.be.equal(undefined);

        });

        it("name in textbox", function () {

            $('#name').val('AntonIglika');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('AntonIglika');

        });
        it("name in textbox", function () {

            let oldvalue = sharedObject.name;
            $('#name').val('');
            sharedObject.updateName();

            expect(oldvalue).to.equal(sharedObject.name);

        });

    });
    describe("Update income", function () {

        it("no number in income textbox", function () {

            $('#income').val('bah');
            expect(sharedObject.updateIncome()).to.be.equal(undefined);

        });
        it("empty income", function () {

            $('#income').val('');
            expect(sharedObject.updateIncome()).to.be.equal(undefined);

        });

        it("empty income", function () {
            let oldIncome = sharedObject.income;
            $('#income').val('');
            sharedObject.updateIncome();
            expect(oldIncome).to.be.equal(sharedObject.income);

        });

        it("negative number", function () {

            $('#income').val(-5);
            expect(sharedObject.updateIncome()).to.be.equal(undefined);

        });
        it("float", function () {

            $('#income').val(2.8);
            expect(sharedObject.updateIncome()).to.be.equal(undefined);

        });

        it("name in textbox", function () {

            $('#income').val(5);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);

        });

    });





});