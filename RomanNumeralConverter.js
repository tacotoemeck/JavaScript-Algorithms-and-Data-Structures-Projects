/*

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function convertToRoman(num) {
 var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
 
 var roms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'] 
 var roman ='';

for ( var i = 0; i < nums.length; i++) {
	while ( nums[i] <= num) {
		roman += roms[i];
		num -= nums[i]
	}
}
return roman
}

convertToRoman(36);


