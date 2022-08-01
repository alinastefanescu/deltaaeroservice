// Create airplane elements
function createAirplane(name,desc,extra,imgURI,price){

	var airplane = document.createElement('article'),
		airplaneName = document.createElement('h3'),
		airplaneImg = document.createElement('img'),
		airplaneDesc = document.createElement('p'),
		airplaneArrow = document.createElement('p'),
		airplaneExtra = document.createElement('p');

	

	// Set classes
	airplane.classList.add('aircraft');
	airplaneArrow.classList.add('arrow');
	airplaneArrow.classList.add('down-arrow');
	airplaneExtra.classList.add('extra');
	airplaneExtra.classList.add('hidden-text');
	
	// Set airplane name
	airplaneName.innerHTML = name + ' - $' + price + '/hr';

	// Set airplane image link
	airplaneImg.src = imgURI;

	// Set airplane description
	airplaneDesc.innerHTML = desc;
	
	// Set extra text
	airplaneExtra.innerHTML = extra;

	// Set down arrow
	airplaneArrow.innerHTML = '&#8615';

	// Add all elements to the content section
	airplane.appendChild(airplaneImg);
	airplane.appendChild(airplaneName);
	airplane.appendChild(airplaneDesc);
	// airplane.appendChild(airplaneArrow);
	airplane.appendChild(airplaneExtra);

	// Add project element to the page
	document.getElementById('content').appendChild(airplane);
}

// Load all airplanes
let airplaneKeys = Object.keys(airplanes);

airplaneKeys.forEach(function(airplane){
	createAirplane(airplanes[airplane].name,airplanes[airplane].desc,airplanes[airplane].extra,airplanes[airplane].imgURI,airplanes[airplane].price);
});