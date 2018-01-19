//Create function to initialize GET call
function ticketFetch(number) {

	// Initialise the Zendesk JavaScript API client
	var client = ZAFClient.init();

	var ticketsUrl = "/api/v2/tickets.json?page=" + number;

	//Fetch tickets endpoint
	client.request(ticketsUrl)
		.then(function(tickets) {

		//Function that will get the length of the object array and print specific values in the object to the visible page.
		function pasteResults () {

			    //Get the length of the Tickets array and subtract 1, so that we can iterate through it.
				var arrayLength = tickets.tickets.length - 1;

			    //Go through array and make a list of the tickets
			    for (var i = arrayLength; i >= 0; i--) { 
					//push ticket array to app
				    var z = document.createElement('p');
					z.innerHTML = '<a href="' + tickets.tickets[i].url + '">' + "Ticket: " + tickets.tickets[i].id + "</a>";
					document.getElementById("ticketList").appendChild(z);
				}
		}

		//if there isn't a next_page, execute the pasteResults function one last time and then stop.
		if (tickets.next_page === null) {

			//Call function to check the page for values and print them
			pasteResults();

			//All clear signal! The loop is done!
			console.log("All Done!");
		}
		//if there is a next_page value, print the values, grab that next page and keep on looping
		else {

			//Call function to check the page for values and print them
			pasteResults();

			//The next_page value isn't null, so move on to the next page and loop through it again.
			return ticketFetch(number + 1);
		}
	},

		//If an error occurs, take the value of that error and print it to the console.log
		function(response) {
			console.error(response.responseText);
		}
	);

}




/* 

perhaps look at doinng a for...in loop to make the innerHTML instead and grab object properties.
*/