function ticketWorker(arrTickets, sortCriteria){
    let criteria = sortCriteria;
    let ticketObjectsArr = [];

    class Ticket{
        constructor(destination, price, status){

            this.destination = destination;
            this.price = parseFloat(price);
            this.status = status;

        }
    }

    for (let ticket of arrTickets){

        let[dest, price, stat] = ticket.split('|');
        ticketObjectsArr.push(new Ticket(dest, price, stat));

    }

    ticketObjectsArr.sort(comparator);

    function comparator(a,b){

        if (a[criteria] < b[criteria])
            return -1;
        if (a[criteria] > b[criteria])
            return 1;
        return 0;

    }

    return ticketObjectsArr;

}

ticketWorker(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);