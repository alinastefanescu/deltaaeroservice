document.addEventListener('DOMContentLoaded', bindButtonsPOST);

function bindButtonsPOST(){

	document.getElementById('submit').addEventListener('click', function(event){
	
		var req = new XMLHttpRequest();

		var formInfo = {fname:null,lname:null,email:null,phone:null};

		formInfo.fname = document.getElementById('fname').value;
		formInfo.lname = document.getElementById('lname').value;
		formInfo.email = document.getElementById('email').value;
		formInfo.phone = document.getElementById('phone').value;
		
		req.open('POST', 'http://httpbin.org/post', true);
		
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
			
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				console.log(response);
				dispResponse(response.json.fname,true);
			}else{
				dispResponse(response.json.fname,false);
				console.log('Error in network request: ' + req.statusText);
			}
		});

		req.send(JSON.stringify(formInfo));
		event.preventDefault();
	
	});

}

// Returns a message to the user that their form was submitted
function dispResponse(fname,submitBool){

	var text = document.createElement('p');

	if(submitBool){ // Successfully sent data
		text.innerHTML = 'Thank you, ' + fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() + ', for your interest in Soar Above!<br>You will be contacted shortly!';
	}else{ // Form error
		text.innerHTML = 'Sorry, ' + fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() + '! Something went wrong with the form!<br>Please come back later and try again!';
	}

	// Hide the form
	document.getElementById('info-form').classList.add('hidden');

	// Show the message
	document.getElementById('content').appendChild(text);
}