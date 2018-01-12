//Create function to initialize GET call
function ticketFetch() {

	// Initialise the Zendesk JavaScript API client
	var client = ZAFClient.init();

	var url = '/api/v2/tickets.json';

	//Fetch tickets endpoint
	client.request(url).then(
	  function(tickets) {



	  	//make sure tickets are being grabbed with console.log of tickets
	    console.log(tickets.tickets[0].url);

	    //Check to see what we're getting for next_page
	    console.log("next_pagetest = " + tickets.next_page);

	    //Get number of tickets and set an array length minus 1
		arrayLength = tickets.count - 1;

	    //Go through array and make a list of the tickets
	    for (var i = arrayLength; i >= 0; i--) { 
		//push ticket array to app
	    var z = document.createElement('p');
		z.innerHTML = '<a href="' + tickets.tickets[i].url + '">' + "Ticket: " + tickets.tickets[i].id + "</a>";
		document.getElementById("ticketList").appendChild(z);
		}

	  },
	  function(response) {
	    console.error(response.responseText);
	  }
	);
}

/* 

Ideally you'd want to make one GET to the page, check to see if next_page equals null.

If null, then move on. If not null, then run the function.


*/