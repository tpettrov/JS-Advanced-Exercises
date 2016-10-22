function attachEvents() {

    $('ul').on('click', 'li', listItemClicked);

    function listItemClicked(){

        //$(this).css('background', '#DDD');

        let currentLi = $(this);

        if (currentLi.attr('data-selected')){

            currentLi.removeAttr('data-selected');
            currentLi.css('background', '');
        } else {

            currentLi.attr('data-selected', 'true');
            currentLi.css('background', '#DDD');

        }

    }

    $('#showTownsButton').on('click', showSelected);

    function showSelected(){

        let selected = $('#items li[data-selected=true]').toArray().map(li => li.textContent).join(', ');

        $('#selectedTowns').text("Selected towns: " + selected);




    }

}

