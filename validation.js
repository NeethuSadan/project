function validation()
{
var phone=document.getElementById("y").value;
var nbrformat=/^([6-9])([0-9]{9})$/;
if(nbrformat.test(phone))
{
	alert("Valid Number");
}
else
{
	document.getElementById("b").innerText = "Invalid phone!";
}
var pswd=document.getElementById("z").value;
var pswrdformat=/^([a-zA-Z0-9]+)$/;
if(pswrdformat.test(pswd))
{
	
}
else
{
	document.getElementById("c").innerText = "Invalid Password!";
}
if( pswrdformat.test(pswd)&&nbrformat.test(phone))
	window.open('page.html')
}