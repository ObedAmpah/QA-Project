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

			// IF you find a string value that is forwards and backwards equal
			if (userValSplitArr[i] == userValRevArr[i]) {

				// Append the matches (found palindromes) to the #user_ouput dom element, inside a inline HTML element, and store this in a variable
				var palindromeFlag = $('#user_output').append('<span>' + userValRevArr[i] + '</span>');

				// Append our palindrome found text to the found palindrome variable
				palindromeFlag.append('<figcaption> That is a palindrome. Cool! </figcaption>');

				// Reset the input but setting its value to an empty string.
				input.val('');

			}

		}

	});

});