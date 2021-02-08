// question 1
function q1(){

    var firstnumber = document.getElementById("q1n1").value;
    var secondnumber = document.getElementById("q1n2").value;
    var textanswer = firstnumber + "." + secondnumber ;
    for (i = 0; i < 8; i++) {
        currentanswer = parseInt(firstnumber) + parseInt(secondnumber);
        textanswer = textanswer + "." + currentanswer;
        firstnumber = secondnumber;
        secondnumber = currentanswer;
    }
    document.getElementById("q1a").innerHTML = textanswer;   
}






// question 2
function q2(){
    
    var firstnumber = document.getElementById("q2n1").value;
    x = Math.abs(firstnumber);

    answer="";
    while(x >= 1){
        if(x % 2){
            y = x /2;
            x =  Math.trunc(y);
            answer = "1" + answer;
        } else{
            x = x /2;
            answer = "0" + answer;
        }
    }

    if ( firstnumber == 0 ) {
    var textanswer = 0;
    } else if(firstnumber > 0){
    var textanswer = answer;
    }else{
    var textanswer = "-" + answer;
    }

    document.getElementById("q2a").innerHTML = textanswer;   
}





// question 3
function q3(){
    ans = [];
    var firstnumber = document.getElementById("q3n1").value;
    ans.push(firstnumber);

    check();
    ans.sort(function(a, b){return a-b});
    document.getElementById("q3a").innerHTML = ans.join(" X ");   
}

// check if all in the array are prime numbers
function check(){
    for (i = 0; i < ans.length; i++) {
        var returnValue = factor(ans[i]);
        if (returnValue.length == 2){
          ans.splice(i, 1, returnValue[0], returnValue[1]);
          check();
        }
    }
}

// return prime factor
function factor(x){

    var i = x - 1 
    var  y = x % i
    while (y != 0){
        i--
        y = x % i
    }

    if (i==1) {
        return [x];
    } else {
        y = x / i;
        return [i,y];
    }
}





// question 4
function q4(){

    var firstnumber = document.getElementById("q4n1").value;
    textanswer = squareroot(firstnumber);
    document.getElementById("q4a").innerHTML = textanswer;   
}

function squareroot(number, guessnumber){
    if(!guessnumber){
        guessnumber = number / 2;
    }
    var dividednumber = number / guessnumber;
    var newguess = (dividednumber + guessnumber) / 2;
    if (guessnumber == newguess){
        return guessnumber;
    }
    return squareroot(number, newguess);
}




