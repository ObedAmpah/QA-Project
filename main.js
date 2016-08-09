$(document).ready(function() { 

	var input = $('#user_text');
	var submitter = $('#sub_button');

	// Variable names should help you understand what is happening, not representative of the data
	// Update: Variable names are not helping and you are lost
	//TODO: FIX naming


		submitter.click(function() {

			// Set a variable that contains the user input values
			var inputVal = input.val();
			
			// split() method creates an array of the input values
			var inputArrSplit = inputVal.split(' ');

			// The map() method loops over each item in an array and then we split the letters of each array item, reverse them, and rejoin them
			var inputArrMap = inputArrSplit.map(function (item) {
			    return item.split('').reverse().join('');
			});

			// 
			for (var i = 0; i < inputArrMap.length; i++) {

				$('#user_output').append("<span>" + inputArrMap[i] + "</span> ");

				if (inputArrSplit[i] == inputArrMap[i]) {
					console.log(inputArrSplit[i] + " is a palindrome");
				}

			}

		});




});