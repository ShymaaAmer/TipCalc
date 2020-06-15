var tipForm = document.getElementById("form");
var billAmount = document.getElementById("amount");
var numperOfPeople = document.getElementById("people");
var service = document.getElementById("service");
var btncalc = document.getElementById('submit');
var btnresult = document.getElementById('result');
var btnreset = document.getElementById("reset");

class Tipcalc
	{
		constructor(billAmount ,numperOfPeople , service){
			this.billAmount = billAmount;
			this.numperOfPeople = numperOfPeople ;
			this.service = service ;
		}
		calculate(){
			const tip = (billAmount.value / numperOfPeople.value) * service.value ;
			return tip ;
		}
	}

tipForm.addEventListener('submit' , e => {
	e.preventDefault();
	console.log(e);
	const tipCalc = new Tipcalc(billAmount.value ,numperOfPeople.value , service.value);
	console.log(tipCalc);
	
	// ckeck all the inputs
	if(tipCalc.billAmount == ''){
		alert("please inter value of bill");
		billAmount.focus();
	}else if(tipCalc.numperOfPeople == ''){
		alert("please inter number of people");
		numperOfPeople.focus();
	}else if(billAmount.value <= 0){
		alert("sorry , bill amout should be positive value")
	}else if(numperOfPeople.value <= 0){
		alert("sorry , numper of people should be positive value")
	}else{
	   	btncalc.addEventListener('dblclick' , e =>{
	    const total_result = tipCalc.calculate();
		console.log(total_result + "is the result");
		btnresult.innerHTML = `<span>${(total_result.toFixed(2))} </span>`

	})
		}
})

	btnreset.addEventListener('click', () =>{
	tipForm.reset();
})




/* for(var i = 0 ; i <= 3 ; i++)
{
    if (i=0){
        service[0].value = 100;
        document.getElementById("service")= service[i].value;
    }else if(i = 1){
        service[1].value = 85;
        document.getElementById("service")= service[i].value;
    }else if(i = 2){
        service[2].value = 75;
        document.getElementById("service")= service[i].value;
    }else if(i = 3){
        service[3].value = 65;
        document.getElementById("service")= service[i].value;
    }
}


calc.onclick = function()
{
    document.getElementById('result').innerHTML = total;
}
*/


