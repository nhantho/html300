
// Establish the array of numbers to use in the buttons
const numberList = [15, 5, 10, 4, 21, 17, 14];

// The 'pretty' list of numbers to display at the top (otherwise it shows all the numbers squished together with no spaces)
const originalNumbers = [15 + ", " + 5 + ", " + 10 + ", " + 4 + ", " + 21 + ", " + 17 + ", " + 14];

$(function () {
// Show the list of numbers in the array on the page
  $('.originalNumbers').append(originalNumbers);

//  List of the variables used
const input1 = $('.input1'), one = $('.submit1'), resultOne = $('.filter');
const input2 = $('.input2'), two = $('.submit2'), resultTwo = $('.find');
const input3 = $('.input3'), three = $('.submit3'), resultThree = $('.map');
const input4 = $('.input4'), four = $('.submit4'), resultSome = $('.some');

	one.on('click', function () {
    // Convert string into a number
    const input = parseInt(input1.val()); {
		// Displays all the numbers in the array that is greater than or equal to the submited value
		const result = numberList.filter(i => i >= input);
		resultOne.text(result);
      }
    });

  two.on('click', function () {
    // Convert string into a number
    const input = parseInt(input2.val()); {
  	// Displays the first number in the array that is greater than the submitted number
  	const result = numberList.find(i => i > input);
    resultTwo.text(result);
      }
    });

  three.on('click', function () {
     // Convert string into a number
    const input = parseInt(input3.val()); {
    // Adds the submited value to each number in the array
    const result = numberList.map(i => i + input);
    resultThree.text(result);
      }
    });

	four.on('click', function () {
    // Convert string into a number
    const input = parseInt(input4.val()); {
		// Will return "true" if submitted number is smaller than at least one number in the array
		const result = numberList.some(i => i > input);
		resultSome.text(result);
      }
    });

});
