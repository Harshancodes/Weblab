function add(){
    var a=parseFloat(document.getElementById('n1').value);
    alert(a);
    var b=parseFloat(document.getElementById('n2').value);
    var res=a+b;
    alert(b);
    alert(res);
    console.log(res);
    document.getElementById('res').innerHTML="result :"+res;
}
function sub(){
    var a=parseFloat(document.getElementById('n1').value);
    alert(a);
    var b=parseFloat(document.getElementById('n2').value);
    var res=a-b;
    alert(b);
    alert(res);
    console.log(res);
    document.getElementById('res').innerHTML="result :"+res;
}
function mul(){
    var a=parseFloat(document.getElementById('n1').value);
    alert(a);
    var b=parseFloat(document.getElementById('n2').value);
    var res=a*b;
    alert(b);
    alert(res);
    console.log(res);
    document.getElementById('res').innerHTML="result :"+res;
}
function div(){
    var a=parseFloat(document.getElementById('n1').value);
    alert(a);
    var b=parseFloat(document.getElementById('n2').value);
    var res=a/b;
    alert(b);
    alert(res);
    console.log(res);
    document.getElementById('res').innerHTML="result :"+res;
}