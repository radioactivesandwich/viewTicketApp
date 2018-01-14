//Create function to initialize GET call
function ticketFetch() {

	// Initialise the Zendesk JavaScript API client
	var client = ZAFClient.init();

	var ticketsUrl = "/api/v2/tickets.json";

	//Fetch tickets endpoint
	client.request(ticketsUrl)
		.then(function(tickets) {



		  	//make sure tickets are being grabbed with console.log of tickets
		    console.log(tickets.tickets[0].url);

		    //Check to see what we're getting for next_page
		    console.log("next_pagetest = " + tickets.next_page);
		    console.log(tickets.count);

		    //Get the length of the Tickets array and subtract 1
			var arrayLength = tickets.tickets.length - 1;
			console.log(tickets.tickets.length);

		    //Go through array and make a list of the tickets
		    for (var i = arrayLength; i >= 0; i--) { 
			//push ticket array to app
		    var z = document.createElement('p');
			z.innerHTML = '<a href="' + tickets.tickets[i].url + '">' + "Ticket: " + tickets.tickets[i].id + "</a>";
			document.getElementById("ticketList").appendChild(z);
			console.log("test: " + tickets.tickets[i].url)
		}

		},
		  function(response) {
		    console.error(response.responseText);
		  }
	);

}

/* 
Making progress. Everything is working. Now just need to figure out how to loop through this thing.

function executes
	for loop
		promise  <-- need to figure out how to return value out of this
	exit loop
done

Check out this promise loop: https://jsbin.com/wirumixojo/edit?html,js,console
*/