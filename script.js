function inputData(){
    document.getElementById("input-data");
    return 
}
function inputBtn(){
    document.getElementById("input-data").value ="";
}
var outData=document.getElementById("out-data");
 function clearOutput(){
    outData.innerHTML="";
 }
function tellTime(){
    var now=new Date();
    var theHr=now.getHours();
    var theMin=now.getMinutes();
    var theSec=now.getSeconds();
    outData.innerHTML+="<br>You clicked the button @" +theHr+":"+theMin+":"+theSec+"<br>"
}
let currentDate=new Date();
document.getElementById("current-output").innerHTML=currentDate;
let dayName=["Sunday","Monday","Tuesday","Wednesday","Turesday","Friday","saturday",]
function getToday(){
    let currentDate=new Date();
    let getDay=currentDate.getDay();
    daynum=dayName[getDay];
    let html="<span>Today is  "+daynum+"<br>"
    outData.innerHTML=html;
    tellTime()
}
function myAge(){
    let dob=document.getElementById("input-data").value;
    if(!dob){
        alert("first enter your date of birth")
    }
    let bornDate=new Date(dob);
    let toDay=new Date();
    let todaytime=  toDay.getTime();
    let bornDateTime= bornDate.getTime()
    let Diff=todaytime-bornDateTime;
    let dayDiff=Diff/(1000* 60 * 60 * 24);
    let html=Math.floor(dayDiff)+" days have been passed since you born";
    outData.innerHTML=html;
    tellTime()
}
function nextBirthday(){
    let dob=document.getElementById("input-data").value;
    if(!dob){
        alert("first enter your date of birth")
    }
    let today= new Date();
    let bornDate= new Date(dob);
    let todaytime= today.getTime();
    let bornDateTime=bornDate.getDate();
    let wsDiff=todaytime-bornDateTime;
    let dayDiff=wsDiff/(1000*60*60*24);
    let html=Math.floor(dayDiff)+"days are remaining in your birthday";
    outData.innerHTML=html;
    tellTime()
}

function greetingMe(msg){
    document.getElementById("upper-text").innerHTML=msg
    tellTime()
}
function greetUser(){
    let userName=   prompt("What is your Name");
    let now=new Date();
    let theHr=now.getHours();
    let greetingMessage= "Good"
    if(theHr>=5 && theHr<12){
        greetingMessage += "Moring"
    }else if(theHr>=12 && theHr<4){
        greetingMessage += "Afternoon"
    }else if(theHr>=4 && theHr<6){
        greetingMessage += "Moring"
    }else{
        greetingMessage += "Night"
    }
    let msg= greetingMessage + "" + userName ;
    greetingMe(msg)
    
}
function tellTime1(){
    tellTime()
}
function tellTime2(){
    tellTime()
}

function texCalculate(){
    var price= +prompt("Enter price");
    var texrate=18;
    var tex=calculateTex(price,texrate);
    let html="Tex:"+tex;
    outData.innerHTML=html;
}
function calculateTex(price,texrate){
    return price*texrate/ 100;
}

function CalculateTotalBtn(){
    var price =+prompt("enter price");
    if(!price){
        alert("enter the price")
    }
    function calculateTotal(){
        if(price<1000){
           var texrate=8;
        }else{
            var texrate=18;
        }
        var tex=calculateTex(price,texrate)
        var total=price+texrate;
        return total;
    }
   var total=calculateTotal(price);
   let html="total:"+Math.floor(total);
   outData.innerHTML=html
}
