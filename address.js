function address()
{
var name=document.getElementById("a").value
var phone=document.getElementById("b").value
var house=document.getElementById("c").value
var area=document.getElementById("d").value
var land=document.getElementById("e").value
var pin=document.getElementById("f").value
var town=document.getElementById("g").value
var state=document.getElementById("h").value
var patternname=/^([a-zA-Z]+)$/
var phn=/^([0-9]){10}$/
var py=/^([0-9]){6}$/
if (patternname.test(name)){}
else{
	alert("invalid name")
}
if(phn.test(phone)){}

	else{
	alert("invalid phone")}
	
if(house=="")
{alert("Enter house name")
}
if(area=="")
{alert("Enter area name")
}
if(land=="")
{alert("Enter land name")
}
if(py.test(pin)){}

	else{
	alert("invalid phone")}
if(town=="")
{alert("Enter town name")
}
if(state=="")
{alert("Enter state name")
}}