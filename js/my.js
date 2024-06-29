function solve(value){
    var a=document.getElementById('display').value+=value;

}

function Resultt(){
    var num1=document.getElementById('display').value;
    var num2= eval(num1);
    document.getElementById('display').value=num2;
}


function clearr(){
    var input=document.getElementById('display');
    input.value="";
}

function Del(){
    var ac=document.getElementById('display');
    ac.value=ac.value.slice(0,-1)
}

