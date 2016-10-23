function timer() {

    $('#start-timer').on('click', startTimer);
    let timer = false;
    let counter = 0;
    function startTimer(){

        if (timer == false) {

            timer = setInterval(step, 1000);

        }

        function step(){

            counter++;

            $('#seconds').text(('0' + (counter % 60)).slice(-2));
            $('#minutes').text(('0' + Math.trunc(counter/60)%60).slice(-2));
            $('#hours').text(('0' + Math.trunc(counter/3600)%99).slice(-2));


        }



    }


    $('#stop-timer').on('click', function (){

        clearInterval(timer);
        timer = false;

    });


}

