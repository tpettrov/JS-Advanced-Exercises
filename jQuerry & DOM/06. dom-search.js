function domSearch(selector, sensitivity) {

        let parentMaster = $(selector);
        let sense = sensitivity;

    // addElemetns DIV

    let itemsDiv = $('<div>').addClass('add-controls').appendTo(parentMaster);
    let itemsLabel = $('<label>Enter text:</label>').appendTo(itemsDiv);
    let input = $('<input>').appendTo(itemsLabel);
    let addButton = $('<a>').addClass('button').css('display','inline-block').text('Add').appendTo(itemsDiv);

    addButton.on('click', addItem);

    function addItem(){

        let li = $('<li>').addClass('list-item').appendTo(ul);
        let a = $('<a>X</a>').addClass('button').appendTo(li).on('click', deleteItem);
        let strongText = $('<strong>').text(input.val()).appendTo(li);

    }


    function deleteItem(){

        $(this).parent().remove();

    }

    //search Items div

    let searchDiv = $('<div>').addClass('search-controls ').appendTo(parentMaster);
    let searchLabel = $('<label>Search:</label>').appendTo(searchDiv);
    let searchString = $('<input>').appendTo(searchLabel).on('input', search);

    let resultDiv = $('<div>').addClass('result-controls').appendTo(parentMaster);
    let ul = $('<ul>').addClass('items-list').appendTo(resultDiv);

function search() {

    if (sense == true) {

        let currentSrchStr = searchString.val();
        //let regex = new RegExp(currentSrchStr);

        $('li.list-item').each((index, item) => {

            if (item.textContent.includes(currentSrchStr)) {

                $(item).css("display", "");


            } else {

                $(item).css("display", "none");
            }

        });
    }
    else {

        let currentSrchStr = searchString.val().toUpperCase();


        $('li.list-item').each((index, item) => {

            if (item.textContent.toUpperCase().includes(currentSrchStr)) {

                $(item).css("display", "");


            } else {

                $(item).css("display", "none");
            }

        });


    }

}
}

