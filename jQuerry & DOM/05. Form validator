function validate() {

    $('#submit').on('click', function(ev){

        ev.preventDefault();
        submit();
    });

    let checked = false; //checkbox checked
    let flag = true; // flag is false if form is unvalid

    $('#company').on('change', function () {

        if(checked == false){
            $('#companyInfo').css('display', 'inline');
            checked = true;
        }

            else {

                $('#companyInfo').css('display', 'none');
                checked = false;
            }
        }

    );

    function submit() {

           let username = $('#username').val();
            let usernameReggex = /^[A-Za-z1-9]{3,20}$/;

        let validCheck = usernameReggex.test(username);

        if (validCheck) {
            $('#username').css("border-color", "none");
        }

        else {

            $('#username').css("border-color", "red");
            flag = false;
        }

        let password = $('#password').val();
        let passwordReggex = /^[A-Za-z1-9_]{5,15}$/;
        let passcheck = passwordReggex.test(password);
        let confirmPassowrd = $('#confirm-password').val();
        let secondPassCheck = passwordReggex.test(confirmPassowrd);

        if(passcheck && secondPassCheck && password == confirmPassowrd) {

            $('#password').css("border-color", "none");
            $('#confirm-password').css("border-color", "none");
        }
        else {

            $('#password').css("border-color", "red");
            $('#confirm-password').css("border-color", "red");
            flag = false;
        }


        if (checked == true) {

            let number = Number($('#companyNumber').val());
            if (number >=1000 && number <= 9999) {

            }
                else {
                $('#companyNumber').css("border-color", "red");
                flag = false;

            }
        }


       let mail =  $('#email').val();
        let mailRegex = /^.*@.*?\..*?$/;
        let mailCheck = mailRegex.test(mail);

        if (mailCheck){

            $('#email').css("border-color", "none");

        } else {

            $('#email').css("border-color", "red");
            flag = false;
        }


        if (!(flag==false)) {

            $('#valid').css('display', 'inline');

        }

    }

}
