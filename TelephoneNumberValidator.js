/*
Return trueif the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return trueif the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function telephoneCheck(str) {
  
var digits = str.match(/[0-9,?,(,)]/g).join('')
console.log(digits)
if(digits.length === 10) {
	return true
} else if (digits.length === 11 && str.charAt(0) == 1) {
	return true
} else if (digits.length === 13 && (digits.charAt(1) == '(' && digits.charAt(5) == ')') && str.charAt(0) == 1){
	return true
} else if (digits.length === 12 && (digits.charAt(0) == '(' && digits.charAt(4) == ')')) {
	return true
}
return false
}

telephoneCheck("(555)555-5555")