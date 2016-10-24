let createBook = (function createBook(){

    let id = 1;
        return function (selector, title, author, isbn) {


            let fragment = document.createDocumentFragment();
            let div = $('<div>').attr('id', 'book' + id).appendTo(fragment);
            id++;
            $('<p>').addClass('title').text(title).appendTo(div);
            $('<p>').addClass('author').text(author).appendTo(div);
            $('<p>').addClass('isbn').text(isbn).appendTo(div);
            $('<button>Select</button>').appendTo(div);
            $('<button>Deselect</button>').appendTo(div);


            $(selector).append(fragment);

            $("button:contains('Select')").on('click', select);

            function select() {

                $(this).parent().css("border", "2px solid blue");

            }

            $("button:contains('Deselect')").on('click', deselect);

            function deselect() {

                $(this).parent().css("border", "none");

            }

        }



}());

/*function createBook(selector, title, author, isbn) {

    let id = 1;


    let fragment = document.createDocumentFragment();
    let div = $('<div>').attr('id', 'book'+id).appendTo(fragment);
    $('<p>').addClass('title').text(title).appendTo(div);
    $('<p>').addClass('author').text(author).appendTo(div);
    $('<p>').addClass('isbn').text(isbn).appendTo(div);
    $('<button>Select</button>').appendTo(div);
    $('<button>Deselect</button>').appendTo(div);



    $(selector).append(fragment);

    $("button:contains('Select')").on('click', select);

    function select(){

        $(this).parent().css("border", "2px solid blue");

    }

    $("button:contains('Deselect')").on('click', deselect);

    function deselect(){

        $(this).parent().css("border", "none");

    }


}*/
