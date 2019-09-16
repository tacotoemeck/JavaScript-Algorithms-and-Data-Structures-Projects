/*
Return trueif the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR"among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

/* FIRST ATTEMPT

function palindrome(str) {

str = str.replace(/[^a-z0-9]/gi,"").toLowerCase()  

var middleIndex = 0;
var leftSide = "";
var rightSide = "";

function reverseSide(s) {
	return str.slice(middleIndex).split('').reverse().join('')
}


if(str.length % 2 !== 0) {
	middleIndex = (str.length + 1) / 2

leftSide = str.slice(0,middleIndex-1)
rightSide = reverseSide(rightSide)
}

else {
middleIndex = str.length / 2
leftSide = str.slice(0,middleIndex)
rightSide = reverseSide(leftSide)

}

return (leftSide === rightSide) 


}

palindrome("eye");

*/

// SECOND ATTEMPT - MADE SIMPLE

function palindrome(str) {
//get rid of unwated characters and turn it into lower case
str = str.replace(/[^a-z0-9]/gi,"").toLowerCase()  
//reverse string
var reverseStr = str.split('').reverse().join('')
// check if orginal string matches its reverse
return str === reverseStr;
}

palindrome("A man, a plan, a canal. Panama");