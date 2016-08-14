$(document).ready(function() { 

	// Store dom elements into variables
	var input = $('#user_text');
	var submitter = $('#sub_button');

	// Create a click event function
	submitter.click(function() {

		// Set a variable that contains the user input value
		var userInput = input.val();
		
		// Use the split() method to separate the single string value into the individual words
		var userValSplitArr = userInput.split(' ');

		// The map() method loops over each item in the array of user input values. We then split the individual letters of each item/value, reverse them, and rejoin them
		var userValRevArr = userValSplitArr.map(function (item) {
		    return item.split('').reverse().join('');
		});

		// Loop through the array of reversed input values
		for (var i = 0; i < userValRevArr.length; i++) {

			// Flag the palindromes
			if (userValSplitArr[i] == userValRevArr[i]) {

				// Store the reversed word output in variable as this is a palindrome
				var palindrome = $('#user_output').append('<span class="rev_word">' + userValRevArr[i] + '</span> <br/>');
		
				// Append our palindrome found text to the found palindrome variable
				palindrome.append('<figcaption> That is a palindrome. Cool! </figcaption>');

			} else {

				// Print out the reversed word without a palindrome flag
				$('#user_output').append('<span class="rev_word">' + userValRevArr[i] + '</span> <br/>');

			}

		}

		// Reset the input but setting its value to an empty string.
		input.val('');

	});

});