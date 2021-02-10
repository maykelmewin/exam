
// question 1
function q1(){

    var firstnumber = document.getElementById("q1n1").value;
    var secondnumber = document.getElementById("q1n2").value;
    if( firstnumber > 0 || firstnumber < 0 || secondnumber > 0 || secondnumber < 0){
        var textanswer = firstnumber + "." + secondnumber ;
        for (i = 0; i < 8; i++) {
            currentanswer = parseInt(firstnumber) + parseInt(secondnumber);
            textanswer = textanswer + "." + currentanswer;
            firstnumber = secondnumber;
            secondnumber = currentanswer;
        }
        document.getElementById("q1a").innerHTML = textanswer;
    }else{
        alert("Wrong Input");
    }   
}






// question 2
function q2(){
    
    var firstnumber = document.getElementById("q2n1").value;
    if( firstnumber > 0 || firstnumber < 0){
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
    }else{
        alert("Wrong Input");
    } 
}





// question 3
function q3(){

    ans = [];
    var firstnumber = document.getElementById("q3n1").value;
    
    if( firstnumber > 1){
        ans.push(firstnumber);
        check();
        ans.sort(function(a, b){return a-b});
        document.getElementById("q3a").innerHTML = ans.join(" X ");   
    }else if(firstnumber == 1){
        document.getElementById("q3a").innerHTML = "No Prime Factor";
    }
    else{
        alert("Wrong Input");
    }
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
    if( firstnumber > 0){
        textanswer = squareroot(firstnumber);
        document.getElementById("q4a").innerHTML = textanswer;  
    }else{
        alert("Wrong Input");
    } 
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





// question 5
function q5(){

    var firstnumber = document.getElementById("q5n1").value;
    if(firstnumber%2 != 0 && firstnumber > 0){
        ino = firstnumber;
        ln = ino * ino;
        ms = [];
        for (var j = 0; j < ln; j++) {
            ms.push(0);
        }
        
        
        cp = (ino - 1 ) / 2;
        n = 1;
        f = ino-1;

        numbering(cp, n++);
        going(cp, n, f);

        
       
        var perrow = ino, html = "<table><tr>";
        for (var i=0; i<ms.length; i++) {
            html += `<td>${ms[i]}</td>`;
            var next = i+1;
            if (next%perrow==0 && next!=ms.length) {
            html += "</tr><tr>";
            }
        }
        html += "</tr></table>";
        document.getElementById("q5a").innerHTML = html;
         

    }else{
        alert("Enter odd number only!");
    }
}

function numbering(arrayIndex, n){
    if(ms[arrayIndex] == 0){
        ms.splice(arrayIndex, 1, n);
    }else{
        alert("error! Has number " + ms[arrayIndex]);
    }
}

function going(cp, n, f){
    if(n <= ln){
        if(f!= ino-1){
            var j = f * ino;
            var k = ino - ( cp +1) % ino;
            var l = j + k + cp 
            if(l+1 == ln ){
                if( ms[cp-ino+1] == 0){
                    actionN();
                }else{
                    actionD();
                }
            }else{
                actionTU();
            }
        }else{
            if(cp+1 == ino ){
                actionD();
            }else{
                actionTL();
            }
        }
    }
}

function actionTL(){
    var k = ino - (cp + 1 ) % ino;
    cp = ln - k ;
    f = 0; 
    numbering(cp, n++);
    going(cp, n, f);
}

function actionTU(){
    cp = cp - (ino*2) + 1;
    f++;
    numbering(cp, n++);
    going(cp, n, f);
}

function actionD(){
    cp = parseInt(cp) + parseInt(ino);
    f--;
    numbering(cp, n++);
    going(cp, n, f);
}

function actionN(){
    cp = cp - ino + 1;
    f++;
    numbering(cp, n++);
    going(cp, n, f);
}

