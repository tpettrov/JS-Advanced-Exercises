function subtract(){

    let num1 = $('#firstNumber').val();
    let num2 = $('#secondNumber').val();

    let diff = parseFloat(num1) - parseFloat(num2);

    $('#result').text(diff);

}