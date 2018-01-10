// Initialise the Zendesk JavaScript API client
// https://developer.zendesk.com/apps/docs/apps-v2
var client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '200px' });

//Set tickets endpoint and define GET call
var fetchItem = {
  url: 'https://z3ngoff.zendesk.com/api/v2/tickets.json',
  cors: true,
  type: 'GET',
  dataType: 'json'
};

//Create function to initialize GET call
function ticketFetch() {
	var client = ZAFClient.init();

	//Fetch tickets endpoint
	client.request('/api/v2/tickets.json').then(
	  function(tickets) {

	  	//make sure tickets are being grabbed with console.log of tickets
	    console.log(tickets.tickets[0].url);

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

var url = "https://z3nbgoff.zendesk.com/api/v2/tickets.json?page=1";

while (url !== null) {

    code block to be executed

	url = tickets.next_page
}


*/