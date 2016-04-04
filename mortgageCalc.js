// code

// The correct formula: c = (r * p) / (1 - Math.pow(1 + r), -n)

// The formula: c = ( (r * p) * Math.pow((1 + r), n) ) / ((Math.pow(1 + 4), n) - 1)
// @param p float Amount borrowed
// @param r interest in a percentage
// @param n term in years, period 
function calculateMortgage(p, r, n) {
	var monthlyPayments = null;

	// convert percentage to a decimal
	r = percentToDecimal(r);

	// convert years to months
	n = yearsToMonths(n);

	// formula to calculate the mortgage payments
	var pmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));

    return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent) {
    return (percent/12)/100;
}

function yearsToMonths(year) {
	return year * 12;
}

// Monthly Payment, the result
function postPayments(payment) {
	var htmlEl = document.getElementById('outMonthlyPayment');

	htmlEl.innerText = "$" + payment;
}

// button
var btn = document.getElementById('btnCalc');
btn.onclick = function() {
    var cost = document.getElementById('inCost').value;

    if (cost == "") {
    	alert("Please enter a cost amount");
    	return false;
    }


    if (cost < 0) {
    	alert("Please enter a correct cost amount");
    	return false;
    }



    var downPayment = document.getElementById('inDown').value;

    if (downPayment == "") {
    	alert("Please enter a cost amount");
    	return false;
    }


    if (downPayment < 0) {
    	alert("Please enter a correct cost amount");
    	return false;
    }

    

    var interest = document.getElementById('inInterest').value;

    //var interestResult = interest.match(/\d+/g);
    
    /* if (interestResult != null) {
    	for (var i = 0, i < interestResult.length, i++) {
    		document.getElementById('inInterest').value += interestResult[i] + "\r\n";	
    	}
    } */

    if (interest == "") {
    	alert("Please enter a cost amount");
    	return false;
    }


    if (interest < 0) {
    	alert("Please enter a correct cost amount");
    	return false;
    }



    var term = document.getElementById('inPeriod').value;


    if (term == "") {
    	alert("Please enter a cost amount");
    	return false;
    }


    if (term < 0) {
    	alert("Please enter a correct cost amount");
    	return false;
    }

    console.log(cost, downPayment, interest, term);

    var amountBorrowed = cost - downPayment;

    var pmt = calculateMortgage(amountBorrowed, interest, term);

    postPayments(pmt);
};