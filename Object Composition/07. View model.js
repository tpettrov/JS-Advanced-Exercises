class Textbox{

    constructor(selector,regex){

        this.selector = selector;
        this.regex = regex;
        this._elements = $(selector);
        this._invalidSymbols = regex;
        let that = this;
        $(selector).on('input', function () {
            that.value = $(this).val();
        });
    }
    get elements(){return this._elements};

    get value(){return $(this.selector).val()};

    set value(val){return $(this.selector).val(val);}


    isValid(){
        return !this._invalidSymbols.test($(this.selector).val())
    }



}