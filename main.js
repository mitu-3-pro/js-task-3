
function calculate()
{
    var a=Number(document.getElementById('num1').value);
    var b=Number(document.getElementById('num2').value);
    var d=document.getElementById('select').value;
    console.log(a);
    console.log(b);
    console.log(d);
    switch (d)
    {
        case "add":
            var c=a+b;
            break;
        case "sub":
            var c=a-b;
            break;
        case "mul":
            var c=a*b;
            break;
        case "div":
            var c=a/b;
            break;
    }
    document.getElementById('res').innerHTML=c;
}