let aircraft = document.getElementsByClassName('aircraft');

let arrow = document.getElementsByClassName('arrow');
let downArrow = document.getElementsByClassName('down-arrow');
let upArrow = document.getElementsByClassName('up-arrow');

let content = document.getElementById('content');

let extra = document.getElementsByClassName('extra');


content.addEventListener('click', divAdjust);

function divAdjust(event) {

	let aircraftIndex = getIndex(arrow,event.target);

	if(event.target.classList[1] == 'down-arrow'){
		expandDiv(event,aircraftIndex);
	}else{
		collapseDiv(event,aircraftIndex);
	}
}

function expandDiv(event,aircraftIndex) {

	let index = getIndex(downArrow,event.target);
	
	// Expand the aircraft article
	aircraft.item(aircraftIndex).classList.add('expanding');

	// Change the arrow to an up arrow
	downArrow.item(index).innerHTML = '&#8613;';

	// Change the class on the arrow
	downArrow.item(index).classList.add('up-arrow');
	downArrow.item(index).classList.remove('down-arrow');

	// Show hidden text
	extra.item(aircraftIndex).classList.remove('hidden-text');
}

function collapseDiv(event,aircraftIndex) {

	let index = getIndex(upArrow,event.target);

	// Show hidden text
	extra.item(aircraftIndex).classList.add('hidden-text');

	// Collapse the aircraft article
	aircraft.item(aircraftIndex).classList.remove('expanding');

	// Change the arrow to an up arrow
	upArrow.item(index).innerHTML = '&#8615;';

	// Change the class on the arrow
	upArrow.item(index).classList.add('down-arrow');
	upArrow.item(index).classList.remove('up-arrow');

}

function getIndex(collection,target){

	for(var i=0;i<collection.length;i++){
		if(collection.item(i) == target){
			return i;
		}
	}

	return -1;
}
