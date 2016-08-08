$(document).ready(function() { 

	var input = $('#user_text');
	var submitter = $('#sub_button');


		submitter.click(function() {

			
			// This is my search regex /'.*?'|".*?"|\S+/g

			console.log("The user entered " + input.val().toLowerCase());

			
			// split() method creates an array within inputSplit
			var inputRev = input.val().split(' ').map(function (item) {
			    return item.split('').reverse().join('');
			}).join(' ');

			// Create an empty array to push the reversed words to
			var outputArr = [];

			// Create an empty array to push the input words to
			var inputArr = [];

			// Push the reversed words to the array
			outputArr.push(inputRev.split(' '));

			// Push the user input  the array 
			inputArr.push(input.val().split(' '));

			// Create an array for the DOM items
			var DOMoutputArr = [];

			// Print out the items in the array
			for (var i = 0; i < outputArr.length; i++) {

				DOMoutputArr.push('<span>' + outputArr[i] + '</span>');

				$('#user_output').html(DOMoutputArr.join(" "));

				console.log(inputArr[i]);
				console.log(outputArr[i]);

			}


		});




});