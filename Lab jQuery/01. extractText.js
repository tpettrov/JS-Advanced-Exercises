
function extractText(){

    let text = $('ul#items li').toArray().map(li => li.textContent).join(', ');
    $("#result").text(text);


}