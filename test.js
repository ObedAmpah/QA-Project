// This counts the number of words
$(document).ready(function() { 

	var input = $('#user_text');
	var submitter = $('#sub_button');


		submitter.click(function() {

			
			// This is my search regex /'.*?'|".*?"|\S+/g

			console.log("The user entered " + input.val());

			
			// split() method creates an array within inputSplit
			var inputSplit = input.val().split(' ');

			console.log(inputSplit.length);

		});




});