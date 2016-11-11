function tableBuilder(selector) {

        function createTable(columnNames) {

             $(selector).empty();
             let table = $('<table>');
             let row = $('<tr>');

             for (let name of columnNames) {

                 let cell = $('<th>');
                 cell.text(name);
                 row.append(cell);

             }

             let action = $('<th>');
             action.text('Action');
             action.appendTo(row);
             row.appendTo(table);

             $(selector).append(table);
         }


    function fillData(dataRows) {

        for (let obj of dataRows) {
            let row = $('<tr>');
            for (let el of obj) {

                let td = $('<td>');
                td.text(el);
                row.append(td);

            }

            let delTD =$('<td>');
            let butt = $('<button>');
            butt.appendTo(delTD);
            butt.text('Delete');

            row.append(delTD);
            row.appendTo($('table'));

        }

        $('button').on('click', function () {

            $(this).parent().parent().remove();

        });

    }



return {createTable: createTable, fillData:fillData }

}


/*
let builder = tableBuilder("#main");
console.log(builder.fillData([
    ['Maria', 'Sofia'],
    ['Kiril', 'Varna'],
    ['Ani <new>', 'Ruse'],
]));*/
