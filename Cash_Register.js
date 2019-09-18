/*

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cidis a 2D array listing available currency.

The checkCashRegister()function should always return an object with a statuskey and a changekey.

Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/



function checkCashRegister(price, cash, cid) {

	// result here
	var final = { status: "CLOSED", change: [] }
	var finalChange = [];
	//change array will hold values of the iteration and will be returned in a result
	var change = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]];
	//notValue, holds numerical value for each note
	var noteValue = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.10], ["NICKEL", 0.05], ["PENNY", 0.01]];

	
	// works out the numerical value of a change to be returned to the customer
	var cashOwed = cash - price; 
	//totalCashInDrawer - returns total of numerical values in cid ( cash in drawer ) 
	var totalCashInDrawer = Number(cid.flat().filter(item => !isNaN(item)).reduce((a,b)=>a+b).toFixed(2)); 
	//reverse cid array so it matches change and noteValue variables pattern
	var reversedCid = cid.reverse()

	//Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due.
	if(totalCashInDrawer == cashOwed) {
		final.change = cid.reverse() ;
		return final;
	}
	// Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.
	if(totalCashInDrawer < cashOwed) {
		final.status = "INSUFFICIENT_FUNDS";
		return final;
	}
	//iterate through cash in drawer -(reversedCid) and denominte its value accordning to the value of the note taken (noteValue), finally add that value to change variable - do for each element n the arr
   	if(totalCashInDrawer > cashOwed) {
	for(var i = 0; i < reversedCid.length; i++) {
		while((cashOwed >= noteValue[i][1]) && (reversedCid[i][1] >= noteValue[i][1])) {
			cashOwed -= noteValue[i][1];
			reversedCid[i][1] -= noteValue[i][1];
			change[i][1] += noteValue[i][1];
		
			cashOwed = cashOwed.toFixed(2)
			}
	//push the result of the iteration above into the finalChange array	
		if(change[i][1] > 0) {
			finalChange.push(change[i])
			
			}
		}
	//when cashOwed drops down to zero,  return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.
		if (cashOwed == 0) {
			final.status="OPEN", final.change=finalChange;
			return final;
	//in case there's not enough coins of needed value to return
		} else {
			final.status="INSUFFICIENT_FUNDS", final.change=[];
			return final;
		}
	}
};

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

