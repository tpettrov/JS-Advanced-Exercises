function increment(father) {

    let parent = $(father);
    let textArea = $('<textarea>').addClass('counter').val(0).attr("disabled", true);
    let incButton = $('<button>').addClass('btn').attr('id','incrementBtn').text('Increment');
    let addButton = $('<button>').addClass('btn').attr('id','addBtn').text('Add');
    let list = $('<ul>').addClass('results');


    parent.append(textArea, incButton, addButton, list);


    $('#incrementBtn').on('click', incrementTextArea);

    function incrementTextArea(){

       var value = parseInt(textArea.val());
        textArea.val(++value);

    }


    $('#addBtn').on('click', function (){

       let li = $('<li>').text(parseInt(textArea.val()));
        list.append(li);


    });


}