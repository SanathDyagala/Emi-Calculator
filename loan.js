function reset(){
    document.getElementById("value1").value=" ";
    document.getElementById("value2").value=" ";
    document.getElementById("value3").value=" ";
    
    document.getElementById("monthly-interest").innerHTML =" &#8377 " +0;
    document.getElementById("monthly-payment").innerHTML =" &#8377 " +0;
    document.getElementById("total-repayment").innerHTML =" &#8377 " +0;
    document.getElementById("total-interest").innerHTML =" &#8377 " +0;
  }
  
  function calculation(){
    
    var loanAmount = document.getElementById("value1").value;
    var interestRate = document.getElementById("value2").value;
    var loanDuration = document.getElementById("value3").value;
     
    //.......... declarations.............
    
   var interestPerYear = (loanAmount * interestRate)/100; 
   var monthlyInterest = interestPerYear/12;
    
    
    var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
    var totalInterestCost = monthlyInterest * loanDuration;
    var totalRepayment = monthlyPayment * loanDuration;
    
    //----------------monthly interest----------------------
    
   document.getElementById("monthly-interest").innerHTML = " &#8377 " +monthlyInterest.toFixed(2);
    
   //-------------Monthly payment------------
    
     document.getElementById("monthly-payment").innerHTML = " &#8377 " +monthlyPayment.toFixed(2); 
    
    //-------------Total repayment-----------
    
    document.getElementById("total-repayment").innerHTML =" &#8377 " +totalRepayment.toFixed(2);
    
    //--------------Total Interest cost----------------
    
    document.getElementById("total-interest").innerHTML =" &#8377 " +totalInterestCost.toFixed(2);
    
  }