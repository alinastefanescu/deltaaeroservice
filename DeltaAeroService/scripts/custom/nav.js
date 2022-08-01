menuLinks = {
	'Despre': 'index.html',
	'Avionul Musetel': 'aircraft.html',
	'Info Local': 'local.html',
	'Contact': 'contact.html'
}

createNav(menuLinks);

// Create and add nav elements
function createNav(links){

	var nav = document.createElement('nav'),
		list = document.createElement('ul'),
		linkKeys = Object.keys(links),
		linkVals = Object.values(links),
		title = document.title.substring(0,document.title.length - 27);


	// Add link titles and reference for all links
	// and append to the navigation list
	for (var i = 0;i < linkKeys.length;i++){

		var menuItem = document.createElement('li'),
			linkItem = document.createElement('a');

		linkItem.innerHTML = linkKeys[i];
		linkItem.href = linkVals[i];

		menuItem.appendChild(linkItem);

		// Add the nav coloring to current page 
		if(title == linkKeys[i]){
			menuItem.classList.add('current');
		}

		list.appendChild(menuItem);
	}

	nav.appendChild(list);

	// Add project element to the page
	document.getElementById('navbar').appendChild(nav);
}
