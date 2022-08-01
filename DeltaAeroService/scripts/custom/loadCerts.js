// Create certificate elements
function createCert(name,desc,price){

	var certificate = document.createElement('article'),
		containerRow = document.createElement('div'),
		nameRow = document.createElement('div'),
		priceRow = document.createElement('div'),
		labelDiv = document.createElement('div'),
		textDiv = document.createElement('div'),
		text = document.createElement('p');

	// Set classes
	certificate.classList.add('container');
	certificate.classList.add('cert')
	containerRow.classList.add('row');
	nameRow.classList.add('cert-name');
	priceRow.classList.add('cert-price');
	labelDiv.classList.add('col-md-4');
	textDiv.classList.add('col-md-8');
	textDiv.classList.add('overflow-auto');
	textDiv.classList.add('cert-text');
	
	// Set text
	nameRow.innerHTML = name;
	priceRow.innerHTML = 'Estimated Cost: $' + price;
	text.innerHTML = desc;

	// Append all elements
	textDiv.appendChild(text);
	labelDiv.appendChild(nameRow);
	labelDiv.appendChild(priceRow);
	containerRow.appendChild(labelDiv);
	containerRow.appendChild(textDiv);
	certificate.appendChild(containerRow);

	// Add project element to the page
	document.getElementById('content').appendChild(certificate);
}

// Load certs
let certKeys = Object.keys(certs);

certKeys.forEach(function(cert){
	createCert(certs[cert].name,certs[cert].desc,certs[cert].price);
});